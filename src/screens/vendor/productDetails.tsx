import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image, ScrollView, TextInput } from 'react-native';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { VendorStackParamList } from "../../navigations/RootNavigator";
//import { useCart } from "../../services/cartContext";

type ProductDetailsScreenNavigationProp = RouteProp<VendorStackParamList, 'ProductDetails'>;

export default function ProductDetails(){
    const route = useRoute<ProductDetailsScreenNavigationProp>();
    const { id, name, desc, price, status, quantity } = route.params;
    const [name1, setName] = useState<string>(name);
    const [price1, setPrice] = useState<string>(price);
    const [avail, setAvail] = useState<string>(status);
    const [descp, setDescp] = useState<string>(desc);
    const [quan, setQuan] = useState<string>(quantity);
    const [weight, setWeight] = useState<string>(quantity);
    const navigation = useNavigation();
    
    const removeHTML = (htmlString: string)=> {
        const descp = htmlString.replace(/<[^>]*>/g, '');
        return(
            <View style={{ margin: hp('1%') }}>
              <Text style={{ fontSize: 24 }} lineBreakMode="head" numberOfLines={100}>{descp}</Text>
            </View>
        );
    };

    return(
        <View style={styles.container}>
          <ScrollView>
            <View style={{ width: wp('100%'), height: hp('40%')}}>
              <Image source={require('../../../assets/office_one.jpg')} style={{ width: 'auto', height: '100%', resizeMode: "cover" }} />
              <TouchableOpacity 
              onPress={() => navigation.goBack()}
              style={{
                    width: wp('10%'), 
                    backgroundColor: '#18256f',
                    height: hp('5%'), 
                    position: 'absolute',
                    top: hp('5%'),
                    left: wp('5%'),
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10
                    }}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
            </View>
            <View style={{padding: 10, backgroundColor: "white", height: 'auto'}}>
                <View style={{ gap: hp('3%') }}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='Name' 
                        keyboardType='default' 
                        style={styles.textInput}
                        value={name1}
                        onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>{/*regular price/sale price */}
                        <TextInput 
                        placeholder='Price' 
                        keyboardType='number-pad' 
                        value={price1}
                        style={styles.textInput}
                        onChangeText={(text) => setPrice(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>{/*Dropdown */}
                        <TextInput 
                        placeholder='Availability' 
                        keyboardType='default' 
                        style={styles.textInput}
                        value={avail}
                        onChangeText={(text) => setAvail(text)}
                        />
                    </View>
                    <View style={styles.inputContainer2}>
                        <TextInput 
                        placeholder='Description' 
                        keyboardType='default' 
                        style={styles.textInput2}
                        value={descp}
                        onChangeText={(text) => setDescp(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='Quantity' 
                        keyboardType='default' 
                        style={styles.textInput}
                        value={quan}
                        onChangeText={(text) => setQuan(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='Weight' 
                        keyboardType='default' 
                        style={styles.textInput}
                        value={weight}
                        onChangeText={(text) => setWeight(text)}
                        />
                    </View>
                </View>
            </View>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TouchableOpacity
                onPress={() => console.log('for updating')}
                style={{
                    width: wp('50%'), 
                    backgroundColor: '#18256f',
                    height: hp('10%'), 
                    borderRadius: 10,
                    alignItems: 'center', 
                    justifyContent: 'center'
                    }}
                >
                    <Text style={{color: 'white', fontSize: 24}}>UPDATE</Text>
                </TouchableOpacity>
            </View>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
            <Text></Text>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffffff',
    },
    loadingContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
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
    inputContainer2: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        width: '100%',
    },
    textInput2: {
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
})
