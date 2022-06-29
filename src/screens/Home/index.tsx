import React from 'react';
import {View, ImageBackground, Text, Pressable, FlatList, useWindowDimensions, } from 'react-native';
import styles from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { posts } from '../../../assets/data/feed';
import PostCarouselItem from '../../components/PostCarouselItem'
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const navigation = useNavigation();
  const width= useWindowDimensions().width;

  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={()=>{ navigation.navigate('Destination Search')}}                                   >
      <Ionicons name="search" size={25} color={'#f15454'}  />
      <Text style={styles.searchButtonText}>Where are you going?</Text>
      </Pressable>

      <ImageBackground
        source={require('../../../assets/images/wallpaper.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Go Near</Text>

        <Pressable
          style={styles.button}
          onPress={() => console.warn('Explore Btn clicked')}>
          <Text style={styles.buttonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>

      {/* post carousel */}
      <View style={{paddingTop: 50}}>
        <FlatList
          data={posts}
          renderItem={({item}) => <PostCarouselItem post={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width - 60}
          snapToAlignment={'center'}
          decelerationRate={"fast"}
        />
      </View>
    </View>
  );
};

export default HomeScreen;