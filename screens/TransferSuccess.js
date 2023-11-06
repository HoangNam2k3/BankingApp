import { View, Text, Image } from 'react-native';
import React from 'react';
import ButtonCus from '../components/ButtonCus';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TransferSuccess = () => {
    const navigation = useNavigation();
    return (
        <View style={{ marginVertical: 100, marginHorizontal: 15, alignItems: 'center' }}>
            <Image source={require('../assets/undraw_Transfer_files_re_a2a91.png')} />
            <Text style={{ fontSize: 24, fontWeight: '700', textAlign: 'center', marginHorizontal: 30, marginTop: 80 }}>
                Transfer Successfully to Jenny Wilson
            </Text>
            <Text style={{ fontSize: 36, fontWeight: '700', color: '#3B3DBF', marginVertical: 30 }}>$ 2500.00</Text>
            <ButtonCus onPress={() => navigation.navigate('Send Money')} tit={'Next'} />
            <TouchableOpacity>
                <Text style={{ color: '#0F9AFF', fontSize: 16, fontWeight: '700', marginVertical: 20 }}>
                    Learn More
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default TransferSuccess;
