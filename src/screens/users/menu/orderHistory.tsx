import { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

interface orders {
    id: number;
    order_key: string;
    price: string;
    product_id: string;
    status: string;
}

export default function OrderHistory(){
    const [data, setData] = useState<orders[] | null>([]);

    if (data?.length === 0) {
        return(
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
                <Text style={{ fontSize: 20}}>No Order Yet</Text>
            </View>
        )
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => (
                    <View style={styles.card}>
                        <Text numberOfLines={1} style={styles.text}>Order Key: {item.order_key}</Text>
                        <Text style={styles.text}>Product ID: {item.product_id}</Text>
                        <Text style={styles.text}>Price: {item.price}</Text>
                        <Text style={styles.text}>Status: {item.status}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={() => 
                <>
                    <Text style={{ fontSize: 20 }}>Order History</Text>
                </>
            }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    card: {
        width: wp('90%'),
        height: hp('20%'),
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 10,
        elevation: 2
    },
    text: {
        fontSize: 20,
        fontWeight: '400'
    }
});