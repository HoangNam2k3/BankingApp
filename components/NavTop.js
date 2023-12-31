import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const NavTop = ({ tit, img }) => {
    const navigation = useNavigation();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginHorizontal: 16,
                paddingVertical: 16,
                marginTop: 44,
                backgroundColor: '#fff',
            }}
        >
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/ArrowChevronLeft.png')} />
            </TouchableOpacity>
            {tit && (
                <Text style={{ textAlign: 'center', flex: 1, fontSize: 18, marginLeft: -12, fontWeight: 700 }}>
                    {tit}
                </Text>
            )}
            {img && <TouchableOpacity><Image source={img} /></TouchableOpacity>}
        </View>
    );
};

export default NavTop;
