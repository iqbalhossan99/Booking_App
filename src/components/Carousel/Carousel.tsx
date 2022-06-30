import React, { useRef, useState } from "react";
import { Animated, Button, Dimensions, Image, View } from "react-native";
import useInterval from "./useInterval";
import styles from "./styles"




const Carousel = ({images})=>{
    const animation = useRef(new Animated.Value(0));
    const [currentImage, setCurrentImage] = useState(0);
    useInterval(() => handleAnimation(), 5000);


    const handleAnimation = () =>{
        let newCurrentImage = currentImage + 1;

        if(newCurrentImage >= images.length){
            newCurrentImage = 0
        }

        Animated.spring(animation.current, {
            toValue:-(Dimensions.get('screen').width * newCurrentImage),
            useNativeDriver: true
        }).start();


        setCurrentImage(newCurrentImage)
    }

    return(
        <React.Fragment>
            <View>
                <Animated.View style={[styles.container, {
              transform: [{translateX: animation.current}],
            },]}>
                    {
                        images.map((image:string, i:number) =>(
                            <Image key={i} source={{uri: image}} style={styles.image} />
                            ))
                        }   
                </Animated.View>
                {/* Indicator */}
                <View style={styles.indicatorContainer}>
                    {images.map((image:string, index:number) => (
                        <View
                        key={`${image}_${index}`}
                        style={[
                            styles.indicator,
                            index === currentImage ? styles.activeIndicator : undefined,
                        ]}
                        />
                    ))}
                </View>
            </View>
        </React.Fragment>
    )
}


export default Carousel



