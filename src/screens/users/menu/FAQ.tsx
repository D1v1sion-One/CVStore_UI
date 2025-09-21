import { View, Text, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export default function FAQ(){
    return(
        <View style={styles.container}>
            <Text style={styles.header}>Frequently Asked Questions</Text>
            <View style={styles.textView}>
                <Text style={styles.textHeader}>Q1.</Text>
                <View style={styles.textContaier}>
                    <Text style={styles.textAns}>Ans</Text>
                </View>
                <Text style={styles.textHeader}>Q2. </Text>
                <Text style={styles.textAns}>Ans </Text>
                <Text style={styles.textHeader}>Q3. </Text>
                <Text style={styles.textAns}>Ans </Text>
                <Text style={styles.textHeader}>Q4. </Text>
                <Text style={styles.textAns}>Ans </Text>
                <Text style={styles.textHeader}>Q5. </Text>
                <Text style={styles.textAns}>Ans </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: hp('3%'),
        backgroundColor: 'white',
        padding: 10
    },
    header: {
        fontSize: 24,
        fontWeight: '500',
        marginTop: hp('3%')
    },
    textView: {
        alignItems: 'flex-start',
        gap: hp('3%')
    },
    textHeader: {
        fontSize: 20,
        fontWeight: '500',
    },
    textAns: {
        fontSize: 16,
        fontWeight: '300',
    },
    textContaier: {
        width: wp('85%'),
        padding: 5
    }
});
