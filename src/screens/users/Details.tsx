import React, {useState} from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation, RouteProp, useRoute } from '@react-navigation/native';
import { UserStackParamList } from "../../navigations/RootNavigator"; 
import Ionicons from '@expo/vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useCart } from "../../context/CartContext";

type DetailsScreenNavigationProp = RouteProp<UserStackParamList, 'Details'>;

export default function Details(){
  //Id: string; name: string, price: string, description: string, likes: number, images: string[], seller: string, category: string
  //find a place to put seller and category
    const route = useRoute<DetailsScreenNavigationProp>();
    const { id, name, description, price, image } = route.params;
    const product = {
      id: id,
      name: name,
      description: description,
      price: price,
      status: status,
      image: image
    }
    const navigation = useNavigation();
    const { addItem } = useCart();
    
    const removeHTML = (htmlString: string)=> {
        const descp = htmlString.replace(/<[^>]*>/g, '');
        return(
            <View style={{ margin: hp('1%') }}>
              <Text style={{ fontSize: 23 }} lineBreakMode="head" numberOfLines={100}>{descp}</Text>
            </View>
        );
    };

    const addToCart = () => {
      if (!product) {
        return
      }
      addItem({
        id: Number(product.id), 
        name: product.name, 
        price: parseFloat(product.price) || 0, 
        image: product.image ||"", 
        quantity: 1,
        status: product.status
      });
      alert("Successfully added to cart");
      navigation.goBack();
    }

    return(
        <View style={styles.container}>
          <ScrollView>
            <View style={{ width: wp('100%'), height: hp('40%')}}>
              <Image source={{uri: image}} style={{ width: 'auto', height: '100%', resizeMode: "cover" }} />
            </View>
      <View style={{padding: 10, backgroundColor: "white", height: 'auto'}}>
        <View style={{ gap: hp('3%') }}>
          <Text style={{ fontSize: 24, fontWeight: "300" }}>{name}</Text>
        </View>
        <View style={{ marginTop: 10, padding: 5 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold" }}>Description</Text>
          {removeHTML(description)}
        </View>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
        <Text></Text>
      </View>
          </ScrollView>
          <View style={{  
            width: wp('100%'),
            height: hp('20%'),
            position: "absolute",
            top: hp('96%'),
            borderTopWidth: 1,
            backgroundColor: "white",
            alignItems: 'center',
            flexDirection: 'row',
            }}>
          <View style={{ bottom: hp('5%'), padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "300"}}>Price</Text>
            <Text style={{ fontSize: 24, fontWeight: "300", color: "#18256f" }}>₦{price}</Text>
          </View>
          {/*also send id */}
        <TouchableOpacity style={{ 
          width: wp('50%'), 
          height: hp('10%'),
          backgroundColor: '#18256f', 
          alignItems: "center", 
          justifyContent: "center", 
          borderRadius: 10,
          left: wp('49%'),
          bottom: hp('8%'),
          position: 'absolute'
          }}
          onPress={() => addToCart()}
          >
          <Text style={{ fontSize: 16, fontWeight: "400", color: "white" }}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
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
})
