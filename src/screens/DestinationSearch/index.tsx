import { Entypo } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, TextInput, FlatList, Text } from 'react-native';
import { destination } from '../../../assets/data/search';
import styles from "./styles"

const DestinationSearchScreen = () => {
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

            {/* List of destination */}
            <FlatList
                data={destination}
                renderItem={({item}) =>(
                    <View style={styles.row}>
                        <View style={styles.iconContainer}>
                            <Entypo name="location-pin" size={35} />
                        </View>
                        <Text>{item.description}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default DestinationSearchScreen;