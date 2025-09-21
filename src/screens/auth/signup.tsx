import { useState, useContext } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    ScrollView,
    ActivityIndicator 
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { AuthStackParamList, VendorStackParamList, UserStackParamList, } from '../../navigations/RootNavigator';
import { Dropdown } from 'react-native-element-dropdown';
import { AuthContext } from '../../context/AuthContext';

type AuthScreenNavigationProp = NavigationProp<AuthStackParamList, 'SignUp'>;
type UserScreenNavigationProp = NavigationProp<UserStackParamList, 'UserTabs'>;
type VendorScreenNavigationProp = NavigationProp<VendorStackParamList, 'VendorTabs'>;

export default function SignUp(){
    const { signup } = useContext(AuthContext)!;
    const [displaName, setDisplayName] = useState('');
    const [Fname, setFName] = useState('');
    const [Lname, setLName] = useState('');
    const [shopName, setShopName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [seePass, setSeePass] = useState<boolean>(true);
    const navigation = useNavigation<AuthScreenNavigationProp>();
    const navigation1 = useNavigation<UserScreenNavigationProp>();
    const navigation2 = useNavigation<VendorScreenNavigationProp>();
    const [value, setValue] = useState('1');
    const [loading, setLoading] = useState(false);

    const data = [
        { label: 'Select...', value: '1' },
        { label: 'Customer', value: 'Customer' },
        { label: 'Store Vendor', value: 'Store Vendor' },
    ];
    

    const handleButton = async () => {
        console.log("signing up.......");
        setLoading(true);

        try {
            //await signup(displaName, email, pass, value);

            if(value === "Customer"){
                navigation1.navigate('UserTabs');
            }else{
                navigation2.navigate('VendorTabs');
            }
            
            console.log("successful registration");
            setLoading(false);

        } catch (error) {
            console.log(error)
        }  
    }

    return(
        <ScrollView>
            <View style={styles.backButtonView}>
                {/*back button */}
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <AntDesign name="caret-left" size={24} color="white"/>
                </TouchableOpacity>
            </View>
            <View style={styles.headerView}>
                <Text style={styles.header}>Let's Sign Up</Text>
            </View>
            <View style={{
                    alignItems: 'center',
                    borderWidth: 1,
                    borderRadius: 8,
                    width: wp('92%'),
                    left: wp('5%')
                }}>
                <Dropdown
                    style={{
                        height: hp('8%'),
                        width: wp('92%'),
                        borderColor: 'gray',
                        borderWidth: 0.5,
                        borderRadius: 8,
                        paddingHorizontal: 8,
                    }}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    data={data}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder='Role'
                    value={value}
                    onChange={item => {
                        setValue(item.value);
                    }}
                    />
            </View>
            {value === 'Customer'
            ? (
                <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput 
                    placeholder='First Name' 
                    keyboardType='default'
                    onChangeText={(text) => setFName(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput 
                    placeholder='Last Name' 
                    keyboardType='default'
                    onChangeText={(text) => setLName(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput 
                    placeholder='Username' 
                    keyboardType='default'
                    onChangeText={(text) => setDisplayName(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='Email' 
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)} 
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
            ) 
            : value === "Store Vendor" ? (
                <View style={styles.textInputView}>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput 
                    placeholder='Full Name' 
                    keyboardType='default'
                    onChangeText={(text) => setDisplayName(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Ionicons name="person" size={24} color="black" />
                    <TextInput 
                    placeholder='Shop Name' 
                    keyboardType='default'
                    onChangeText={(text) => setShopName(text)} 
                    style={styles.textInput}
                    />
                </View>
                <View style={styles.inputContainer}>
                    <AntDesign name="mail" size={24} color="black" />
                    <TextInput 
                    placeholder='Email' 
                    keyboardType='email-address'
                    onChangeText={(text) => setEmail(text)} 
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
            ) : (<View></View>)}
            <View style={styles.buttonView}>
                {loading 
                ? <ActivityIndicator size="large" color='white'/> 
                : <TouchableOpacity style={styles.button} onPress={() => handleButton()}>
                    <Text style={styles.buttonText}>Register</Text>
                  </TouchableOpacity>}
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
        </ScrollView>
    );
}

const styles =StyleSheet.create({
    container: {
        flex: 1,
    },
    backButtonView: {
        margin:10,
        top: hp('5%'),
        marginBottom: hp('5%')
    },
    backButton: {
        width: wp('20%'),
        height: hp('7%'),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18256f',
        borderRadius: 50
    },
    headerView: {
        margin: 5,
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
        backgroundColor: 'green'
    },
    regView: {
        marginTop: hp('2%')
    },
    regText: {
        fontSize: 16
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
});