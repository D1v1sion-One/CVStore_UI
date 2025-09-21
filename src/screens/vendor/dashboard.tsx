import { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, ActivityIndicator } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import Ionicons from '@expo/vector-icons/Ionicons';
import { VendorStackParamList } from "../../navigations/RootNavigator";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

type DashboardScreenNavigationProp = NavigationProp<VendorStackParamList, 'VendorTabs'>;

export default function Dashboard(){
    const navigation = useNavigation<DashboardScreenNavigationProp>();
    const [loading, setLoading] = useState(false);
    const {user} = useContext(AuthContext)!
    const data = [
        {id: '1', name: 'isaac', price: 1235, status: 'instock', desc: 'jabldjvblajdbvadjvlajdbvb', quantity: 2},
        {id: '2', name: 'peace', price: 543, status: 'instock', desc: 'jabldjvblajdbvadjvlajdbvb', quantity: 10},
        {id: '3', name: 'joy', price: 8421, status: 'out-stock', desc: 'jabldjvblajdbvadjvlajdbvb', quantity: 5},
        {id: '4', name: 'isaac', price: 58, status: 'instock', desc: 'jabldjvblajdbvadjvlajdbvb', quantity: 1},
        {id: '5', name: 'peace', price: 5421, status: 'instock', desc: 'jabldjvblajdbvadjvlajdbvb', quantity: 52},
        {id: '6', name: 'joy', price: 9865, status: 'out-stock', desc: 'jabldjvblajdbvadjvlajdbvb', quantity: 23},
    ];

    function truncate(text: string, max: number){
        return text.length > max ? text.slice(0, max) + "...": text;
    };

    return(
        <View style={styles.container}>
            <Text></Text>
            <View style={styles.card}>
                {/*image */}
                <View>
                    <Text style={styles.headText}>Shop Name: <Text>DJ MIX{/*user.display_name*/}</Text></Text>
                </View>
                <View>
                    <Text style={styles.headText}>Username: <Text>  MOnetyke{/*user.email*/}</Text></Text>
                </View>
                <View>
                    <Text style={styles.headText}>Email: <Text>          test@example.com{/*user.email*/}</Text></Text>
                </View>
            </View>
            <View style={{marginTop: hp('1%')}}>
                <Text style={{fontSize: 24, fontWeight: '600'}}>List of Products</Text>
                {loading 
                ? <ActivityIndicator size="large" color="#18256f" /> 
                : <FlatList
                    data={data}
                    renderItem={({item}) => (
                        <TouchableOpacity 
                        onPress={() => navigation.navigate('ProductDetails',{
                            id: item.id,
                            name: item.name,
                            price: item.price.toString(),
                            status: item.status,
                            desc: item.desc,
                            quantity: item.quantity.toString()
                        })}
                        style={{width: wp('95%'), height: hp('20%'), backgroundColor: 'white', margin: hp('1%'), borderRadius: 10, flexDirection: 'row', elevation: 2}}>
                            <Image source={require('../../../assets/office_two.jpg')} 
                            style={{width: wp('35%'), height: hp('18%'), backgroundColor: 'red', margin: hp('1%'), borderRadius: 10}} />
                            <View style={{paddingTop: 15}}>
                            <Text style={{fontSize:18}}>{truncate(item.name, 20)}</Text>
                            <Text style={{fontSize:20}}>₦ {item.price}</Text>
                            <Text style={{fontSize:16, fontStyle: 'italic'}}>{item.status}</Text>
                            <View style={{flexDirection: 'row', paddingTop: 5, gap: 5}}>
                                <Text>Quantity: {item.quantity}</Text>
                                <TouchableOpacity 
                                style={{left: wp('40%'), position: 'absolute'}}
                                onPress={() => console.log(item.id)}>
                                    <Ionicons name='trash-bin' size={30} color='black' />
                                </TouchableOpacity>
                            </View>
                            </View>
                        </TouchableOpacity>
                    )}
                />
                }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: 'white'
    },
    card: {
        width: wp('95%'),
        height: hp('23%'),
        borderRadius: 10,
        backgroundColor: 'white',
        gap: wp('7%'),
        padding: 5,
        elevation: 5
    },
    headText: {
        fontSize: 20,
        fontWeight: '500'
    },
    lines: {
        width: wp('1%'),
        height: hp('20%'),
        backgroundColor: 'black',
        left: wp('47%'),
        position: 'absolute'
    },
    fontHeader: {
        fontSize: 20,
        fontWeight: '500'
    },
    outputText: {
        fontSize: 30,

    }
})