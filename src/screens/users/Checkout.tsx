//in this screen, create order
import { useState } from "react";
import { 
    View, 
    Text, 
    TouchableOpacity, 
    StyleSheet, 
    TextInput, 
    ScrollView ,
    FlatList, 
    Image} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { UserStackParamList } from "../../navigations/RootNavigator";
import { useCart } from "../../context/CartContext";

//type CheckoutScreenNavigationProp = RouteProp<UserStackParamList, 'Checkout'>;

export default function Checkout(){
    // const route = useRoute<CheckoutScreenNavigationProp>();
    // const { id, name, description, price, status, image } = route.params;
    // const navigation = useNavigation();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [addr, setAddr] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [delivery, setDelivery] = useState<boolean>(false);
    const [card, setCard] = useState<boolean>(false);
    const { items, subtotal, clear } = useCart();

//

    function truncate(text: string, max: number){
        return text.length > max ? text.slice(0, max) + "...": text;
    }

    const handleOrderCOD = async() => {
        //function for creating orders with cash on devilery payment method
    }

    const handlePayStack = async () => {
        //function for creating orders with payment integration
    }

    const payment = async() => {
        //function to handle orders
        //if paymentType1 execute handleOrderCOD
        handleOrderCOD();
        //if paymentType1 execute handlePayStack
        handlePayStack();
    }

    const paymentType1 = () => {
        setDelivery(prev => !prev)
        setCard(false);
    }

    const paymentType2 = () => {
        setCard(prev => !prev)
        setDelivery(false);
    }

//   line_items: {
//     product_id: string;
//     quantity: string;
//     total: string;
//     price: string;
//   }


    return(
        <View style={styles.container}>
            <ScrollView style={styles.container} automaticallyAdjustKeyboardInsets>
                <View style={{margin: hp('2%')}}>
                    <Text style={{fontSize: 20}}>Billing Info</Text>
                </View>
                <View style={{gap: hp('2%')}}>
                    <View style={{flexDirection: 'row', gap: wp('5%')}}>
                        <View style={styles.inputContainer2}>
                            <TextInput
                                placeholder='First Name' 
                                keyboardType='default'
                                onChangeText={(text) => setFirstName(text)} 
                                value={firstName}
                                style={styles.textInput1}
                            /> 
                        </View>
                        <View style={styles.inputContainer2}>
                            <TextInput
                                placeholder='Last Name' 
                                keyboardType='default'
                                onChangeText={(text) => setLastName(text)} 
                                value={lastName}
                                style={styles.textInput1}
                            />
                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Address' 
                            keyboardType='default'
                            onChangeText={(text) => setAddr(text)} 
                            value={addr}
                            style={styles.textInput}
                        /> 
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='City' 
                            keyboardType='default'
                            onChangeText={(text) => setCity(text)} 
                            value={city}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='State' 
                            keyboardType='default'
                            onChangeText={(text) => setState(text)} 
                            value={state}
                            style={styles.textInput}
                        /> 
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Country' 
                            keyboardType='default'
                            onChangeText={(text) => setCountry(text)} 
                            value={country}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder='Phone Number' 
                            keyboardType='number-pad'
                            onChangeText={(text) => setPhone(text)} 
                            value={phone}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={{margin: 5, gap: hp('1%')}}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 24, fontWeight: '300'}}>Pay on Delivery</Text>
                        <TouchableOpacity style={{
                            width: wp('6%'), 
                            height: hp('3%'), 
                            borderWidth: 2, 
                            backgroundColor: delivery ? '#18256f' : 'white',
                            borderRadius: 50,
                            borderColor: 'black',
                            left: wp('3.5%'),
                            top: hp('1%')
                            }}
                            onPress={() => paymentType1()}
                            ></TouchableOpacity>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 24, fontWeight: '300'}}>Pay with Card</Text>
                        <TouchableOpacity style={{
                            width: wp('6%'), 
                            height: hp('3%'), 
                            borderWidth: 2, 
                            backgroundColor: card ? '#18256f' : 'white',
                            borderRadius: 50,
                            borderColor: 'black',
                            left: wp('8%'),
                            top: hp('1%')
                            }} onPress={() => paymentType2()}></TouchableOpacity>
                    </View>
                </View>
                {/*A FlatList */}
                <View style={{margin: hp('2%')}}>
                    <Text style={{fontSize: 20, fontWeight: '500'}}>Product info with bill</Text>
                </View>
                <View style={{ bottom: hp('2%')}}>
                    {items.map((item) => (
                        <View key={item.id} style={{width: wp('95%'), height: hp('20%'), backgroundColor: 'white', margin: hp('1%'), borderRadius: 10, flexDirection: 'row'}}>
                        <Image source={{ uri: item.image}} style={{width: wp('35%'), height: hp('18%'), backgroundColor: 'red', margin: hp('1%'), borderRadius: 10}} />
                        <View style={{paddingTop: 15}}>
                            <Text style={{fontSize:18}}>{truncate(item.name, 20)}</Text>
                            <Text></Text>
                            <Text style={{fontSize:20}}>₦{item.price}</Text>
                        </View>
                    </View>
                    ))}
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                    <Text></Text>
                </View>
            </ScrollView>
                <View style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    width: wp('100%'),
                    height: hp('12%'),
                    position: "absolute",
                    top: hp('88%'),
                    backgroundColor: 'white',
                    padding: 5,
                    borderTopWidth: 1
                    }}>
                    <View style={{bottom: hp('2%')}}>
                        <Text style={{fontSize: 20, fontWeight: '400'}}>Total Price: ₦{subtotal}</Text>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => payment()}>
                        <Text style={styles.buttonText}>Pay</Text>
                    </TouchableOpacity>
                </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 3,
        backgroundColor: 'white'
    },
    textInput1:{
        flex: 1,
        height: hp('8%'),
        fontSize: 16
    },
    textInput: {
        flex: 1,
        height: hp('8%'),
        fontSize: 16
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: wp('96%'),
    },
    inputContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: wp('45%'),
    },
    button: {
        width: wp('30%'),
        height: hp('7%'),
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#18256f',
        left: wp('65%'),
        top: hp('1%'),
        position: "absolute",
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold'
    },
});