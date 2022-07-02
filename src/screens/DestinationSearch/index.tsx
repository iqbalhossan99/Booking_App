import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, Pressable } from 'react-native';
// import { GooglePlaceData, GooglePlaceDetail, GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { destination } from '../../../assets/data/search';
import styles from "./styles"

const DestinationSearchScreen = () => {
    const navigation = useNavigation();
    const [inputText, setInputText] = useState('')
    return (
        <View style={styles.container}>
            {/* Input component */}
            <TextInput 
                style={styles.textInput}
                placeholder="Where you are going"
                value={inputText}
                onChangeText={setInputText}
            />

            {/* <View style={{height:500}}>
                <GooglePlacesAutocomplete
                    placeholder='Where are you going?'
                    onPress={(data : GooglePlaceData, details : GooglePlaceDetail | null = null) =>{
                        console.log(data, details)
                    }}
                    
                    styles={{
                    textInput: styles.textInput,
                    }}
                    query={{
                    key: '--------There should be your map api---------',
                    language: 'en',
                }}
           
                />
            </View> */}

            {/* List of destination */}
            <FlatList
                data={destination}
                renderItem={({item}) =>(
                    <Pressable onPress={()=> navigation.navigate('Guests')} style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={35} />
                        </View>
                        <Text>{item.description}</Text>
                    </Pressable>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;