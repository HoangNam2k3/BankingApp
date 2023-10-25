import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Button} from 'react-native';
import NavTop from '../components/NavTop';
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EnterPin from './EnterPin';
import { useNavigation, useScrollToTop } from '@react-navigation/native';

const Splash = () => {
    const navigation = useNavigation();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const toggleIsSubmited = () => {
        setIsSubmitted(value => !value)
    };

    useEffect(() => {
        if(isSubmitted === true){
            navigation.navigate('EnterPin');
        }
    }, [isSubmitted])
    return (
        <View style={styles.container}>
          <View style={styles.conTent}>
            <Image source={require('../assets/img/Logo.png')} ></Image>
            <Text style={styles.Brand}> Muz-Bank </Text>
            <Text style={styles.advert}> Find the best company stock for your investment </Text>
          </View>
          <TouchableOpacity style={styles.btnLogin} onPress={() => {toggleIsSubmited()}}>
            <Text style={styles.textLogin}>
                Login
            </Text>
          </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#393BB7',
    },
    conTent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Brand: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginVertical: 20,
    },
    advert: {
        width: 314,
        color: '#fff',
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
    },
    btnLogin: {
        backgroundColor: '#fff',
        width: 342,
        height: 48,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textLogin: {
        fontWeight: '500',
        fontSize: 16,
    }

});

export default Splash;
