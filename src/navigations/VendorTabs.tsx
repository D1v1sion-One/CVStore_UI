import { View, Text, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Dashboard from "../screens/vendor/dashboard";
import ManageProduct from "../screens/vendor/addProduct";
import VendorOrders from "../screens/vendor/VendorOrders";
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

const Tab = createBottomTabNavigator();
//icon for dashboard, manage, orders
export default function VendorTabs(){
    return(
        <Tab.Navigator screenOptions={{headerShown: true}}>
            <Tab.Screen
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="bookmarks-outline" size={24} style={{ color: '#222' }}/>
                    ),
                    headerRight: () => 
                    <TouchableOpacity style={{right: wp('5%')}}>
                        <Ionicons name="log-in-outline" size={30} color='black' />
                    </TouchableOpacity>
                }}
            />
            <Tab.Screen
                name="ADD"
                component={ManageProduct}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="add-circle-outline" size={24} style={{ color: '#222' }}/>
                    ),
                    headerTitle: "ADD PRODUCT"
                }}
            />
            <Tab.Screen
                name="VendorOrders"
                component={VendorOrders}
                options={{
                    tabBarIcon: () => (
                        <Ionicons name="albums-sharp" size={24} style={{ color: '#222' }}/>
                    ),
                    headerTitle: "VENDOR'S ORDERS"
                }}
            />
        </Tab.Navigator>
    )
}