import React from "react";
import { View, Text } from "react-native";
import {useRoute} from '@react-navigation/native';

import PostDetails from "../../components/PostDetails";
import { posts } from "../../../assets/data/feed";


const PostScreen = () => {

  const route = useRoute()
  const post = posts.find(post => post.id === route.params.postId)

  // console.log(route.params);
  return (
    <View style={{backgroundColor: 'white'}}>
      <PostDetails post={post} />
    </View>
  );
};

export default PostScreen;