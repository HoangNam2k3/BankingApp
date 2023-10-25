import React from "react";
import {Text, View, ImageBackground, Image, StyleSheet} from 'react-native'

const HeaderDrawer = () => {
    return(
        <View> 
            <Text>This is a home drawer header</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
})