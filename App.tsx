import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import Router from "./src/navigation/Router";
import Store from "./src/redux/store";



export default function App() {
  return (
    <Provider store={Store} >
      <StatusBar style="auto" />
      <Router/>
    </Provider>

  );
}


