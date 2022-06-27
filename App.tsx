import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import Post from "./src/components/Posts";
import HomeScreen from "./src/screens/Home";

import feed from "./assets/data/feed";
import { PostType } from "./types";

const post1 = feed[2]

export default function App() {
  return (
    <View >
      <StatusBar style="auto" />
      <HomeScreen/>
      <Post post={post1}/>
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
