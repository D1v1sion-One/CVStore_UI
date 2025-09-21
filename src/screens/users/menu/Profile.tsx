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
import AntDesign from '@expo/vector-icons/AntDesign';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Profile(){
    const [loading, setLoading] = useState(false);
    return(
        <View style={styles.container}>
            <View style={styles.icon}>
                <Ionicons name="person" size={60} color='black' />
            </View>
            <View style={styles.proCard}>
                <View style={styles.textHolderView}>
                    <Text style={styles.textHolder}>Username</Text>
                    <Text style={styles.textHolder}>Email</Text>
                </View>
                <View style={styles.textDataView}>
                    <Text style={styles.textData}>Drizzyleo</Text>
                    <Text style={styles.textData}>Drizzyleo@gmail.com</Text>
                </View>
            </View>
            <Text style={styles.header} >Update Profile</Text>
            <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='User Name' 
                    keyboardType='default'
                    //onChangeText={(text) => setUsername(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='Email' 
                    keyboardType='email-address'
                    //onChangeText={(text) => setUsername(text)} 
                    style={styles.textInput}
                    />
                </View>
            </View>
            <View style={styles.buttonView}>
                <TouchableOpacity style={styles.button} >
                    {loading ? <ActivityIndicator size='large' color='white'/> : <Text style={styles.buttonText}>UPDATE PROFILE</Text>}
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    icon: {
        alignItems: 'center',
        margin: hp('3%')
    },
    proCard: {
        width: wp('95%'),
        height: hp('15%'),
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        flexDirection: 'row',
        elevation: 5,
        margin: wp('3%')
    },
    textHolderView: {
        padding: 5,
        gap: hp('3%')
    },
    textHolder: {
        fontSize: 20,
        fontWeight: '500'
    },
    textDataView: {
        padding: 5,
        gap: hp('3%')
    },
    textData: {
        fontSize: 20
    },
    header: {
        marginLeft: wp('2%'),
        fontWeight: '600',
        fontSize: 16,
        fontStyle: 'italic'
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
