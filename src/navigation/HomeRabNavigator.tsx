import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

import { AntDesign, FontAwesome, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import ExploreNavigator from './ExploreNavigator';
import LoginRegister from '../components/LoginRegister';
import { useNavigation } from '@react-navigation/native';

type ActiveTintColor={
    activeTintColor:string
}

const HomeTabNavigator = () => {

    const Tab = createBottomTabNavigator();
    const navigation = useNavigation();

    return (
        <Tab.Navigator
        screenOptions ={{
        tabBarActiveTintColor : '#f15454',
        }}>
          <Tab.Screen name="Explore" 
          component={ExploreNavigator} 
          // component={PostScreen} 
        //   component={Login} 
            options={{
                tabBarIcon: ({color}) =>(
                    <FontAwesome name="search" size={24} color={color} />
                )
            }}
          />
          <Tab.Screen name="Save" component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) =>(
                    <AntDesign name="hearto" size={24} color={color} />
                )
            }}
          />
         
          <Tab.Screen name="Trips" component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) =>(
                    <FontAwesome5 name="airbnb" size={24} color={color}  />
                )
            }}
          />
           <Tab.Screen name="Inbox" component={HomeScreen} 
            options={{
                tabBarIcon: ({color}) =>(
                    <MaterialIcons name="forward-to-inbox" size={24} color={color}  />
                )
            }}
          />
          <Tab.Screen name="User" component={LoginRegister} 
            options={{
                tabBarIcon: ({color}) =>(
                    <AntDesign  
                    name="user" size={24}  color={color}  />
                )
            }}
          />

        </Tab.Navigator>
    );
};

export default HomeTabNavigator;