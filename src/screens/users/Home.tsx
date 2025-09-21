import { useState, useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Loading } from "../../components/loading";
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { UserStackParamList } from '../../navigations/RootNavigator';

type HomeTabsScreenNavigationProp = NavigationProp<UserStackParamList, 'UserTabs'>;

export default function HomeScreen(){
    const [loading, setLoading] = useState<boolean>(false);
    const navigation = useNavigation<HomeTabsScreenNavigationProp>();
     const data = [
        {id: '1', name: 'Cables', image: "", price: 2356, description: 'gxgcjgcncgcj'},
        {id: '2', name: 'CCTV', image: '', price: 8945, description: 'gxgcjgcncgcj'},
        {id: '3', name: 'Dome Cameras', image: '', price: 51256, description: 'gxgcjgcncgcj'},
        {id: '4', name: 'Electric Fences', image: '', price: 231548, description: 'gxgcjgcncgcj'},
        {id: '5', name: 'Fire Alarm', image: '', price: 84568, description: 'gxgcjgcncgcj'},
     ]

    function truncate(text: string, max: number){
        return text.length > max ? text.slice(0, max) + "...": text;
    }

    const fetchProducts = async () => {
        //this function will use axios to fetch data from your api
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return(
        <View style={styles.container}>
            {!loading && data ? (
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => (
                        <View>
                            {item.image.length !== 0 &&
                                <TouchableOpacity style={styles.flatcontainer} onPress={
                            () => navigation.navigate("Details", {
                                id: item.id.toString(),
                                name: item.name,
                                price :item.price.toString(),
                                description: item.description,
                                image: item.image
                            })
                            }>
                            <Image 
                              source={{uri: item.image}} 
                              style={styles.img}
                              resizeMode="cover"
                              /> 
                            <Text style={styles.name} numberOfLines={1} >{item.name}</Text>
                            <Text style={styles.price}>₦{item.price}</Text>
                        </TouchableOpacity>
                            }
                        </View>
                    )}
                    numColumns={2}
                />
            ) : (
                <Loading/>
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    topBar: {
        flexDirection: "row",
        marginTop: hp('5%'),
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    profilePic: {
        width: wp('15%'),
        height: hp('8%'),
        borderRadius: 50,
        right: wp(' 15%')
    },
    logo: {
        width: wp('30%'),
        height: hp('8%'),
    },
    notification: {
        left: wp(' 17%')
    },
    header: {
        padding: 10
    },
    headerText: {
        fontSize: 24,
        fontWeight: '500'
    },
    flatcontainer: {
        width: wp('45%'),
        height: hp('30%'),
        gap: wp('2%'),
        padding: 10,
        margin: wp('2%'),
        elevation: 5
    },
    img: {
        width: wp('45%'),
        height: hp('20%'),
        borderRadius: 10,
    },
    price: {
        fontSize: 20,
        fontWeight: '600',
    },
    name: {
        fontSize: 16,
        fontWeight: '500',
    },
    
})
