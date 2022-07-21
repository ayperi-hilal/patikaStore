import { StatusBar } from 'expo-status-bar';
import React from "react";
import { View, Text, StyleSheet } from 'react-native';


const HeadersBar = () => {
    return (
        <View>
            <Text style={styles.title}>PATIKASTORE</Text>
        </View>
    );
};
const styles = StyleSheet.create({

    title: {
        fontWeight: 'bold',
        margin: 5,
        fontSize: 20,

    },

});

export default HeadersBar;