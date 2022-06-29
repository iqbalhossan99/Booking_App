import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, Image, Pressable} from 'react-native';
import { PostType } from '../../../types';
import styles from './styles';


  
const Post: React.FC<{post:PostType}>=
({
        post: {
            id,
            image,
            type,
            title,
            description,
            bed,
            bedroom,
            oldPrice,
            newPrice,
            totalPrice,
            coordinate: {
              latitude,
              longitude,
            },
        }
      }) => {

    const days = 7;
    
    const navigation = useNavigation();
    const goToPostDetails = ()=>{
      navigation.navigate ('Post',{postId: id})
    }

 

  return (
    <Pressable onPress={()=> goToPostDetails()} style={styles.container}>
      {/* Image  */}
      <Image
        style={styles.image}
        source={{uri: image}}
      />

      {/* Bed & Bedroom  */}
      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {type}. {title}
      </Text>

      {/*  Old price & new price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${oldPrice}</Text>
        <Text style={styles.price}>  ${newPrice} </Text>
        / night
      </Text>

      {/*  Total price */}
      <Text style={styles.totalPrice}>${newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;