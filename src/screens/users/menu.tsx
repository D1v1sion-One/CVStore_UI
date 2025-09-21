import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { UserStackParamList, AuthStackParamList } from "../../navigations/RootNavigator";
import { AuthContext } from "../../context/AuthContext";

type MenuTabsScreenNavigationProp = NavigationProp<UserStackParamList, 'UserTabs'>;
type AuthTabsScreenNavigationProp = NavigationProp<AuthStackParamList, 'Login'>;

export default function Menu(){

    const navigation = useNavigation<MenuTabsScreenNavigationProp>();
    const nav_logout = useNavigation<AuthTabsScreenNavigationProp>();
    //const {logout} = useContext(AuthContext)!;

    const loggingOut = () => {
        //logout();
        nav_logout.navigate('Login');
    }
    
    return(
        <View style={styles.container}>
            <View style={styles.card1}>
                <TouchableOpacity style={styles.listing} onPress={() => navigation.navigate('Profile')} >
                    <Ionicons name="person" size={24} color='black' />
                    <Text>Profile</Text>
                    <Ionicons name="arrow-forward" size={24} color='black' style={{ left: wp('55%') }}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listing} onPress={() => navigation.navigate('ChangePassword')}>
                    <Ionicons name="lock-closed" size={24} color='black'/>
                    <Text>Change Password</Text>
                    <Ionicons name="arrow-forward" size={24} color='black'  style={{ left: wp('35%') }}/>
                </TouchableOpacity>
            </View>

            <View style={styles.card2}>
                <TouchableOpacity style={styles.listing} onPress={() => navigation.navigate('OrderHistory')}>
                    <Ionicons name="list" size={24} color='black' />
                    <Text>Order History</Text>
                    <Ionicons name="arrow-forward" size={24} color='black' style={{ left: wp('43%') }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listing} onPress={() => navigation.navigate('FAQ')}>
                    <Ionicons name="chatbubble-ellipses" size={24} color='black' />
                    <Text>FAQ</Text>
                    <Ionicons name="arrow-forward" size={24} color='black' style={{ left: wp('59%') }} />
                </TouchableOpacity>
            </View>

            <View style={styles.card3}>
                <TouchableOpacity style={styles.listing} onPress={() => nav_logout.navigate('Login')}>
                    <Ionicons name="log-out" size={24} color='black' />
                    <Text>Sign Out</Text>
                    <Ionicons name="arrow-forward" size={24} color='black' style={{ left: wp('51%') }} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.listing}>
                    <Ionicons name="trash-bin" size={24} color='black' />
                    <Text>Delete Account</Text>
                    <Ionicons name="arrow-forward" size={24} color='black' style={{ left: wp('39%') }} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    card1: {
        width: wp('95%'),
        height: hp('15%'),
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        top: hp('5%'),
    },
    card2: {
        width: wp('95%'),
        height: hp('15%'),
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        top: hp('7%'),
    },
    card3: {
        width: wp('95%'),
        height: hp('15%'),
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        top: hp('10%'),
    },
    listing: {
        flexDirection: 'row',
        gap: 10,
        margin: '3%'
    }
});