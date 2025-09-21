import {useState, useEffect} from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { UserStackParamList } from '../../navigations/RootNavigator';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useCart } from '../../context/CartContext';


type CartTabsScreenNavigationProp = NavigationProp<UserStackParamList, 'UserTabs'>;

export default function CartScreen(){
    const [quantity, setQuantity] = useState<number>(1);
    const navigation = useNavigation<CartTabsScreenNavigationProp>();
    const { items, removeItem, updateQty, subtotal, clear } = useCart();

    useEffect(() => {
        console.log("this is items: ", items);
    },[])

    const increaseQuantity = () => {
        const num = quantity + 1;
        setQuantity(num);
    }

    const decreaseQuantity = () => {
        if (quantity == 1) {
            return;
        }

        const num = quantity + 1;
        setQuantity(num);
    }

    if (!items || items.length === 0) {
        return(
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{fontSize: 24}} >No Products in Cart</Text>
            </View>
        );
    };

    function truncate(text: string, max: number){
        return text.length > max ? text.slice(0, max) + "...": text;
    }

    return(
        <View style={{flex:1, alignItems: 'center'}}>
            <FlatList
                data={items}
                keyExtractor={(i) => i.id.toString()}
                renderItem={({item}) => (
                        <View style={{width: wp('95%'), height: hp('20%'), backgroundColor: 'white', margin: hp('1%'), borderRadius: 10, flexDirection: 'row'}}>
                        <Image source={{ uri: item.image}} style={{width: wp('35%'), height: hp('18%'), backgroundColor: 'red', margin: hp('1%'), borderRadius: 10}} />
                        <View style={{paddingTop: 15}}>
                            <Text style={{fontSize:18}}>{truncate(item.name, 20)}</Text>
                            <Text style={{fontSize:20}}>₦{item.price}</Text>
                            <Text style={{fontSize:16, fontStyle: 'italic'}}>{item.status}</Text>
                            <View style={{flexDirection: 'row', padding: 5, gap: 5}}>
                                <TouchableOpacity 
                                    onPress={() => updateQty(item.id, Math.max(1, (item.quantity||1) -1))}
                                    style={{width: wp('7%'), height: hp('3%'), backgroundColor: '#18256f', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}><Text style={{color: 'white'}}>-</Text></TouchableOpacity>
                                <Text style={{fontSize:20, bottom: hp('0.5%')}}>{item.quantity}</Text>
                                <TouchableOpacity 
                                    onPress={() => updateQty(item.id, (item.quantity||1) +1)}
                                    style={{width: wp('7%'), height: hp('3%'), backgroundColor: '#18256f', alignItems: 'center', justifyContent: 'center', borderRadius: 5}}><Text style={{color: 'white'}}>+</Text></TouchableOpacity>
                                <TouchableOpacity 
                                style={{left: wp('15%')}}
                                onPress={() => removeItem(item.id)}>
                                    <Ionicons name='trash-bin' size={30} color='black' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                )}
            />
            <View style={{  
                        width: wp('100%'),
                        height: hp('10%'),
                        position: "absolute",
                        top: hp('75%'),
                        borderTopWidth: 1,
                        backgroundColor: "white",
                        alignItems: 'center',
                        flexDirection: 'row',
                        }}>
                            <Text style={{fontSize: 16, fontWeight: '500'}}>SubTotal: <Text style={{color: 'green'}}>₦{subtotal.toFixed(2)}</Text></Text>
                            <TouchableOpacity style={{ 
                                width: wp('35%'), 
                                height: hp('8%'),
                                backgroundColor: '#18256f', 
                                alignItems: "center", 
                                justifyContent: "center", 
                                borderRadius: 10,
                                left: wp('15%'),
                                bottom: hp('0.5%')
                                }}
                                onPress={() => navigation.navigate('Checkout',{
                                    id: '',
                                    name: '',
                                    price: '',
                                    quantity: 2
                                })}
                                >
                                <Text style={{ fontWeight: "400", color: "white" }}>CHECKOUT</Text>
                            </TouchableOpacity>
                        </View>
        </View>
    )
}
