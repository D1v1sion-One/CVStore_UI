import { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput,
    TouchableOpacity,
    ActivityIndicator
 } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';


export default function ChangePassword(){
    const [loading, setLoading] = useState(false);
    const [pass, setPass] = useState('');
    const [seePass, setSeePass] = useState(false)


    const user = [
        {
            users :{
                id: '1',
                name: 'isaac'
            }
        }
    ];


    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name="person" size={60} color='black' />
                {user 
                ? <Text style={styles.iconText}>username</Text> 
                : <Text style={styles.iconText}>No Name</Text>}
            </View>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.inputContainer}>
                    <AntDesign name="lock" size={24} color="black" />
                    <TextInput 
                    placeholder='Change Password' 
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
                <TouchableOpacity style={styles.button} >
                    {loading ? <ActivityIndicator size='large' color='white'/> : <Text style={styles.buttonText}>CHANGE PASSWORD</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    icon: {
        alignItems: 'center',
        margin: hp('3%')
    },
    iconText: {
        marginTop: hp('2%'),
        fontSize: 20,
        fontWeight: '400'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: wp('95%'),
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
});