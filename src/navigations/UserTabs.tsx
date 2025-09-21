import { useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/users/Home";
import CartScreen from "../screens/users/Cart";
import Menu from "../screens/users/menu";
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { UserStackParamList } from '../navigations/RootNavigator';


type OrderScreenNavigationProp = NavigationProp<UserStackParamList, 'UserTabs'>;

const Tab = createBottomTabNavigator();

export default function UserTabs(){
    const navigation = useNavigation<OrderScreenNavigationProp>();

   

    return(
        <Tab.Navigator screenOptions={{ headerShown: true }}>
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="home-outline" size={25} style={{ color: '#222' }}/>
                    ),
                    headerTitle: ""
                }}
            />
            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="cart" size={24} style={{ color: '#222' }}/>
                    )
                }}
            />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="menu-outline" size={24} style={{ color: '#222' }}/>
                    ),
                    headerTitle: "My Menu"
                }}
            />
        </Tab.Navigator>
    )
}
