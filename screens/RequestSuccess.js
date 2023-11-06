import { View, Text, Image, TouchableOpacity } from 'react-native';
import ButtonCus from '../components/ButtonCus';
import { useNavigation } from '@react-navigation/native';

const RequestSuccess = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#fff', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require('../assets/illustration.png')} />
            <View style={{ alignItems: 'center', marginTop: 44 }}>
                <Text style={{ fontSize: 28, fontWeight: 600 }}>Success</Text>
                <Text style={{ color: '#8A8A8E', marginBottom: 32, marginTop: 12, fontSize: 17 }}>
                    Payment request was sent to Asep Ketan
                </Text>
                <Text style={{ fontSize: 34, fontWeight: 700, color: '#3B3DBF' }}>$ 2500.00</Text>
            </View>
            <View style={{ width: '100%', alignItems: 'center', marginTop: 32 }}>
                <ButtonCus onPress={() => navigation.navigate('Request Money')} tit={'Next'} />
                <TouchableOpacity>
                    <Text style={{ marginTop: 32, fontSize: 18, fontWeight: 600, color: '#3B3DBF' }}>Learn More</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default RequestSuccess;
