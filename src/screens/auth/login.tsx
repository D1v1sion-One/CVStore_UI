import {useState, useContext} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { VendorStackParamList, UserStackParamList, AuthStackParamList } from '../../navigations/RootNavigator';
import { AuthContext } from '../../context/AuthContext';

type AuthScreenNavigationProp = NavigationProp<AuthStackParamList, 'Login'>;
type UserScreenNavigationProp = NavigationProp<UserStackParamList, 'UserTabs'>;
type VendorScreenNavigationProp = NavigationProp<VendorStackParamList, 'VendorTabs'>;

export default function Login(){
    const [username, setUsername] = useState('johndoe2@gmail.com');
    const [pass, setPass] = useState('');
    const [loading, setLoading] = useState<boolean>(false);
    const [seePass, setSeePass] = useState<boolean>(true);
    const navigation = useNavigation<UserScreenNavigationProp>();
    const navigation2 = useNavigation<VendorScreenNavigationProp>();
    const navigation3 = useNavigation<AuthScreenNavigationProp>();
    const { login, role } = useContext(AuthContext)!;
    
    const handle = async () => {
        try {
            console.log('.....Authen');
            // await login(username, pass);
            // alert("Login Successful");
            if (role === "Customer") {
                navigation.navigate('UserTabs');
            } else {
                navigation2.navigate('VendorTabs');
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <View>
            <View>
                <Image  style={styles.img} source={require('../../../assets/office_one.jpg')} />
            </View>
            <View style={styles.headerView}>
                <Text style={styles.header}>Let's Sign In</Text>
            </View>
            <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='Email' 
                    keyboardType='email-address'
                    onChangeText={(text) => setUsername(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput 
                    placeholder='Password' 
                    keyboardType='default'
                    onChangeText={(text) => setPass(text)} 
                    style={styles.textInput}
                    secureTextEntry={seePass}
                    />
                    {seePass 
                    ? <TouchableOpacity onPress={() => setSeePass(false)}>
                        <Feather name="eye-off" size={24} color="black" />
                      </TouchableOpacity>
                    : <TouchableOpacity onPress={() => setSeePass(true)}>
                        <Feather name="eye" size={24} color="black" />
                      </TouchableOpacity>}
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} onPress={() => handle()} >
                    {loading ? <ActivityIndicator size='large' color='white'/> : <Text style={styles.buttonText}>SIGN IN</Text>}
                </TouchableOpacity>
                {/*<View style={{ marginTop: 5, marginBottom: 5 }}><Text>------------------------OR------------------------</Text></View>
                <TouchableOpacity style={styles.goolgeButton}>
                    <AntDesign name="google" size={24} color="white" />
                </TouchableOpacity>*/}
                <View style={styles.regView}>
                    <Text style={styles.regText}>Don't have an account, 
                        <Text style={{ color: 'blue', fontWeight: '500' }} onPress={() => navigation3.navigate("SignUp")}> Register</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    img: {
        width: wp('100%'),
        height: hp('20%')
    },
    headerView: {
        margin: 5
    },
    header: {
        fontSize: 30,
        fontWeight: '500'
    },
    textInputView: {
        margin: 5,
        padding: 10,
        gap: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '100%',
    },
    textInput: {
        flex: 1,
        height: hp('10%'),
        fontSize: 16
    },
    textView: {
        margin: 5,
        left: wp('5%')
    },
    text: {
        fontSize: 16,
        fontWeight: '300'
    },
    buttonView: {
        margin: 10,
        alignItems: 'center'
    },
    button: {
        width: wp('70%'),
        height: hp('8%'),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18256f'
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
    goolgeButton: {
        width: wp('70%'),
        height: hp('8%'),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18256f'
    },
    regView: {
        marginTop: hp('2%')
    },
    regText: {
        fontSize: 16
    }

});