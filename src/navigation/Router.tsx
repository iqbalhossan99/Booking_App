import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DestinationSearchScreen from '../screens/DestinationSearch';
import HomeTabNavigator from './HomeRabNavigator';
import GuestsScreen from '../screens/Guests';
import Post from '../components/Posts';
import PostScreen from '../screens/PostScreen';
import LoginRegister from '../components/LoginRegister';



const Stack = createNativeStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen name="Home" component={HomeTabNavigator}
                options={{
                    headerShown: false,
                }}
              />
              <Stack.Screen name="Destination Search" component={DestinationSearchScreen} 
                options={{
                    title:"Search your destination"
                }}
              />
              <Stack.Screen
                name={"Guests"}
                component={GuestsScreen}
                options={{
                    title: "How many people?"
                }}
                />

                {/* <Stack.Screen
                name={"Post"}
                component={Post}
                options={{
                    title: "Accommodation"
                }}
                /> */}
                <Stack.Screen
                name={"Post"}
                component={PostScreen}
                options={{
                    title: "Accommodation"
                }}
                />
                <Stack.Screen
                name={"LoginRegister"}
                component={LoginRegister}
                options={{
                    title: "Log In"
                }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;