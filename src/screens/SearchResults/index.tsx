import React from "react";
import { View, FlatList, Text } from "react-native";
import { posts } from "../../../assets/data/feed";
import Post from "../../components/Posts";

const SearchResult = () => {
  return <View>
    {/* Display all posts */}
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
    />
  </View>;
};

export default SearchResult;
