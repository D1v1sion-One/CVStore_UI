//use animation on a logo to increase and decrease in size
import { View, Text, Image, Animated, Easing, StyleSheet } from "react-native";
import { useState, useEffect, useRef } from 'react';


const Loading = () => {
    const animValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(animValue, {
                toValue: 1,
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
                }),
                Animated.timing(animValue, {
                toValue: 0,
                duration: 1000,
                easing: Easing.inOut(Easing.ease),
                useNativeDriver: true,
                }),
            ]),
            ).start();
    }, [animValue]);

    const translateY = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 50],
    });

    return(
        <View style={styles.loadingOverlay}>
            <Animated.View style={{ transform: [{ translateY }] }}>
            <Image style={{width: 200, height: 200}} source={require("../../assets/favicon.png")} resizeMode="cover"/>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  webview: {
    flex: 1,
    marginTop: 10, // Adjust this as needed for your app's header
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export {Loading}