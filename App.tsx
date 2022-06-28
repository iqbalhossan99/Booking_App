import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Post from "./src/components/Posts";
import HomeScreen from "./src/screens/Home";

import { posts } from "./assets/data/feed";
import SearchResult from "./src/screens/SearchResults";
import DestinationSearchScreen from "./src/screens/DestinationSearch";

const post1 = posts[2]

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      {/* <HomeScreen/>
      <Post post={post1}/>
      <SearchResult/> */}
      <DestinationSearchScreen />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
