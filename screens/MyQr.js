import React from "react";
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import NavTop from "../components/NavTop";
import { FlatList } from "react-native-gesture-handler";

const Render = ({ item }) => {
    return (
        <View style={{width: 70, height: 100, alignItems: 'center'}}>
            <View style={{width: 40, height: 40, backgroundColor: '#F4F4F5', borderRadius: 10, marginVertical: 20}}></View>
            <Text> {item.text} </Text>
        </View>
    );
};

const MyQr = () => {
    return (
        <View style={styles.container}>
            <NavTop tit={'Pay With QR'} img={require('../assets/img/Info.png')}/>

            <Text style={{fontWeight: '500', fontSize: 14, color: '#8A8A8E', textAlign: 'center', marginVertical: 12,}}>
                Place your camera at QR Code to pay
            </Text>

            <View style={{alignItems: 'center', marginVertical: 20}}>
                <View style={styles.ContainerQrCode}>
                    <Text style={{fontSize: 20, fontWeight: '700', marginVertical: 20}}> 
                         Scan your QR 
                    </Text>
                    <Text style={{marginVertical: 16,}}> 
                        Place your finger over the fingerprint sensor 
                    </Text>
                    <Image source={require('../assets/img/QRCode.png')} style={styles.ImageQr}/>

                    <TouchableOpacity style={styles.btnLearnMore}>
                        <Text style={{textAlign: 'center', lineHeight: 40, color: '#0F9AFF'}}> Learn More </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottom}>
                <FlatList
                data={data1}
                renderItem={({item, data1}) => <Render item={item}/>}
                horizontal
                contentContainerStyle={styles.contentContainer}
                style={styles.FlatList}
                />
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc',
    },
    ContainerQrCode: {
        backgroundColor: '#fff',
        width: '96%',
        height: 450,
        alignItems: 'center',
        borderRadius: 10,
    },
    btnLearnMore: {
        width: '100%',
        height: 40,
        marginVertical: 20,
    },
    bottom: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    contentContainer: {
       width: '90%',
       justifyContent: 'space-between'
    },
});

const data1 = [
    {
        key: 1,
        text: 'Gallery',
    },
    {
        key: 2,
        text: 'Flashlight',
    },
    {
        key: 3,
        text: 'My QR',
    }
];

export default MyQr;