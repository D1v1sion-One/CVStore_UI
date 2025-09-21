import { useState } from "react";
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    TouchableOpacity, 
    Image,
    ScrollView 
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Dropdown } from 'react-native-element-dropdown';

export default function ManageProduct(){
    const [imgLoad, setImgLoad] = useState(false);
    const [name, setName] = useState<string>();
    const [price, setPrice] = useState<string>();
    const [avail, setAvail] = useState<string>();
    const [descp, setDescp] = useState<string>();
    const [quan, setQuan] = useState<string>();
    const [weight, setWeight] = useState<string>();

    const [value, setValue] = useState('1');
    
    const data = [
        { label: 'Availability...', value: '1' },
        { label: 'Instock', value: 'Instock' },
        { label: 'outofstock', value: 'outofstock' },
        { label: 'onbackorder', value: 'onbackorder' },
    ];

    return(
        <View style={styles.container}>
            <ScrollView>
            <View style={{ 
                width: wp('100%'), 
                height: hp('40%'), 
                backgroundColor: 'white', 
                alignItems: 'center', 
                justifyContent: 'center',
                }}>
                {imgLoad 
                ? <Image style={{ width: wp('80%'), height: hp('30%'), resizeMode: "cover" }}/> 
                : <Ionicons name="image" size={50}/>/*use an online free image for image not loaded */}
            </View>
            <View style={{padding: 10, backgroundColor: "white", height: 'auto'}}>
                <View style={{ gap: hp('3%') }}>
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='Product Name' 
                        keyboardType='default' 
                        style={styles.textInput}
                        value={name}
                        onChangeText={(text) => setName(text)}
                        />
                    </View>
                    <View style={styles.inputContainer}>{/*regular price/sale price */}
                        <TextInput 
                        placeholder='Price' 
                        keyboardType='number-pad' 
                        value={price}
                        style={styles.textInput}
                        onChangeText={(text) => setPrice(text)}
                        />
                    </View>
                    <View style={{
                        alignItems: 'center',
                        borderWidth: 1,
                        borderRadius: 8,
                        width: wp('92%'),
                        left: wp('1%')
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
                    <View style={styles.inputContainer}>
                        <TextInput 
                        placeholder='Description' 
                        keyboardType='default' 
                        style={styles.textInput}
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
                style={{
                    width: wp('50%'), 
                    backgroundColor: '#18256f',
                    height: hp('10%'), 
                    borderRadius: 10,
                    alignItems: 'center', 
                    justifyContent: 'center'
                    }}
                >
                    <Text style={{color: 'white', fontSize: 24}}>UPLOAD</Text>
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
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
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
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 16,
    },
})