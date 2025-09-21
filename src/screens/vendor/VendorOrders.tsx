import { useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function VendorOrders(){
    const [arrow, setArrow] = useState(false);

    const data = [
        {
            id: '1', 
            order_no: 784512, 
            order_key: "wdcf_jlsdlvnsld", 
            currency: "NGN",
            customer_id: 1245,
            total: "123125",
            billing: {
                first_name: "Peace",
                last_name: "Lekwot",
                address_1: "String",
                city: "Kaduna",
                state: "Kaduna",
                postcode: "80024",
                country: "Nigeria",
                email: "peacelekwot@gmail.com",
                phone: "08154475256",
            },
            shipping: {
                first_name: "Peace",
                last_name: "Lekwot",
                address_1: "String",
                city: "Kaduna",
                state: "Kaduna",
                country: "Nigeria",
            },
            line_items: {
                product_id: "1235",
                name: 'Walkie Talkie',
                quantity: 3,
                total: "3",
                price: "2358",
            }
        },
        {
            id: '2',
            order_no: 784512, 
            order_key: "wdcf_jlsdlvnsld", 
            currency: "NGN",
            customer_id: 1245,
            total: "123125",
            billing: {
                first_name: "Peace",
                last_name: "Lekwot",
                address_1: "String",
                city: "Kaduna",
                state: "Kaduna",
                postcode: "80024",
                country: "Nigeria",
                email: "peacelekwot@gmail.com",
                phone: "08154475256",
            },
            shipping: {
                first_name: "Peace",
                last_name: "Lekwot",
                address_1: "String",
                city: "Kaduna",
                state: "Kaduna",
                country: "Nigeria",
            },
            line_items: {
                product_id: "1235",
                name: 'Raincoat',
                quantity: 3,
                total: "3",
                price: "2358",
            }
        },
        {
            id: '3', 
            order_no: 784512, 
            order_key: "wdcf_jlsdlvnsld", 
            currency: "NGN",
            customer_id: 1245,
            total: "123125",
            billing: {
                first_name: "Peace",
                last_name: "Lekwot",
                address_1: "String",
                city: "Kaduna",
                state: "Kaduna",
                postcode: "80024",
                country: "Nigeria",
                email: "peacelekwot@gmail.com",
                phone: "08154475256",
            },
            shipping: {
                first_name: "Peace",
                last_name: "Lekwot",
                address_1: "String",
                city: "Kaduna",
                state: "Kaduna",
                country: "Nigeria",
            },
            line_items: {
                product_id: "1235",
                name: 'Flipper Zero',
                quantity: 3,
                total: "3",
                price: "2358",
            }
        },
    ];
    //order_number, order_key, product_name, currency, price, billing_info, shipping_info, customer_id

    return(
        <View style={styles.container}>
            <View>
                <FlatList
                    data={data}
                    renderItem={({item}) => (
                    <View style={{marginTop: hp('2%')}}>
                        {arrow 
                        ? <View style={styles.cardOrder}>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Order No: </Text>{item.order_no}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Order Key: </Text>{item.order_key}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Product Name: </Text>{item.line_items.name}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Product Price:</Text>{item.currency} {item.line_items.price}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Quantity: </Text>{item.line_items.quantity}</Text>
                            <Text></Text>
                            <TouchableOpacity style={styles.downArrow} onPress={() => setArrow(false)}>
                                <Ionicons name="arrow-down" size={24} color='black' />
                            </TouchableOpacity>
                         </View> 
                        : <View style={styles.cardOrder}>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Order No: </Text>{item.order_no}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Order Key: </Text>{item.order_key}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Product Name: </Text>{item.line_items.name}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Product Price:</Text>{item.currency} {item.line_items.price}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Quantity: </Text>{item.line_items.quantity}</Text>
                            <Text></Text>
                            <Text style={styles.headerText}>Billing Info</Text>
                            <Text></Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>First Name: </Text>{item.billing.first_name}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Last Name: </Text>{item.billing.last_name}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Address: </Text>{item.billing.address_1}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>City: </Text>{item.billing.city}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>State: </Text>{item.billing.state}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Phone No: </Text>{item.billing.phone}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Email: </Text>{item.billing.email}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Country: </Text>{item.billing.country}</Text>
                            <Text></Text>
                            <Text style={styles.headerText}>Shipping Info</Text>
                            <Text></Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>First Name: </Text>{item.shipping.first_name}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Last Name: </Text>{item.shipping.last_name}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Address: </Text>{item.shipping.address_1}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>City: </Text>{item.shipping.city}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>State: </Text>{item.shipping.state}</Text>
                            <Text style={styles.text}><Text style={{fontWeight: '700'}}>Country: </Text>{item.shipping.country}</Text>
                            <TouchableOpacity style={styles.downArrow} onPress={() => setArrow(true)}>
                                <Ionicons name="arrow-up" size={24} color='black' />
                            </TouchableOpacity>
                            </View>
                        }
                    </View>
                )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white'
    },
    cardOrder: {
        width: wp('90%'),
        height: hp('auto'),
        borderRadius: 10,
        backgroundColor: 'white',
        elevation: 10,
        padding: 10
    },
    downArrow: {
        borderTopWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerText: {
        fontSize: 24,
        fontWeight: '600',
        borderBottomWidth: 1
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }

})