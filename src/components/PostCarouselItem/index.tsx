import React from 'react';
import { View, Text, Image, useWindowDimensions, Pressable } from "react-native";
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
  

  return (
    <Pressable style={[styles.container]}>
      <View style={styles.innerContainer}>
        {/* Image  */}
        <Image
          style={styles.image}
          source={{uri: image}}
        />

        <View style={{flex: 1, marginHorizontal: 10}}>
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
            <Text style={styles.price}>${newPrice} </Text>
            / night
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default Post;