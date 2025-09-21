import { useState, useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigatorScreenParams, NavigationContainer } from '@react-navigation/native';
import VendorTabs from "./VendorTabs";
import UserTabs from "./UserTabs";
import Login from "../screens/auth/login";
import SignUp from "../screens/auth/signup";
import Details from "../screens/users/Details";
import Checkout from "../screens/users/Checkout";
import OrderHistory from "../screens/users/menu/orderHistory";
import Profile from "../screens/users/menu/Profile";
import FAQ from "../screens/users/menu/FAQ";
import ChangePassword from "../screens/users/menu/changePassword";
import { CartProvider } from "../context/CartContext";
import { AuthProvider } from "../context/AuthContext";
import ProductDetails  from "../screens/vendor/productDetails";
import { AuthContext } from "../context/AuthContext";


type RootStackParamList = {
    Auth: NavigatorScreenParams<AuthStackParamList>;
    User: NavigatorScreenParams<UserStackParamList>;
    Vendor: NavigatorScreenParams<VendorStackParamList>;
};

export type AuthStackParamList = {
    Login: undefined;
    SignUp: undefined;
}

export type UserStackParamList = {
    UserTabs: undefined;
    Details: {id: string; name: string; price: string; description: string; image: string};
    Checkout: {id: string; name: string; price: string; quantity: number};
    Profile: undefined;
    ChangePassword: undefined;
    OrderHistory: undefined;
    FAQ: undefined;
}

export type VendorStackParamList = {
    VendorTabs: undefined;
    ProductDetails: {id: string; name: string; price: string; status: string; desc: string; quantity: string};
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const UserStack = createNativeStackNavigator<UserStackParamList>();
const VendorStack = createNativeStackNavigator<VendorStackParamList>();

export const AuthStackNav: React.FC = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
};

export const AppStackNav: React.FC = () => {
  return (
    <CartProvider>
      <UserStack.Navigator screenOptions={{ headerShown: false }}>
        <UserStack.Screen name="UserTabs" component={UserTabs} />
        <UserStack.Screen name="Details" component={Details} />
        <UserStack.Screen name="Checkout" component={Checkout} options={{headerShown: true}}/>
        <UserStack.Screen name="Profile" component={Profile} options={{headerShown: true}}/>
        <UserStack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: true}}/>
        <UserStack.Screen name="OrderHistory" component={OrderHistory} options={{headerShown: true}}/>
        <UserStack.Screen name="FAQ" component={FAQ} options={{headerShown: true}}/>
      </UserStack.Navigator>
    </CartProvider>
  );
};

export const VendorStackNav: React.FC = () => {
  return (
    <VendorStack.Navigator screenOptions={{ headerShown: false }}>
      <VendorStack.Screen name="VendorTabs" component={VendorTabs} />
      <VendorStack.Screen name="ProductDetails" component={ProductDetails} />
    </VendorStack.Navigator>
  );
};




export  const RootNavigator = () => {
    const [role, setRole] = useState("Customer")
    const [token, setToken] = useState("ljsdlvjldvnadknv")


    return(
        <AuthProvider>
          <NavigationContainer >
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
              {token && role == "Customer" ? (
                // User is authenticated, show the main app screens
                <RootStack.Screen name="User" component={AppStackNav} />
              ) : token && role == "Store Vendor" ? (
                // No user session, show the authentication screens
                <RootStack.Screen name="Vendor" component={VendorStackNav} />
              ) : (
                <RootStack.Screen name="Auth" component={AuthStackNav} />
              )}
            </RootStack.Navigator>
          </NavigationContainer>
        </AuthProvider>
    );
}