import { View, Text, Image } from 'react-native';
import NavTop from '../components/NavTop';
import ButtonCus from '../components/ButtonCus';
import InputCus from '../components/InputCus';
import Item from '../components/Item';
import { EWalletCenter_DATA } from '../data';
import { useNavigation } from '@react-navigation/native';

const Data = EWalletCenter_DATA[0];
const TopUpEWallet = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <NavTop tit={'Top up E-Wallet'} />
            <View
                style={{
                    backgroundColor: '#fff',
                    paddingHorizontal: 18,
                    marginVertical: 44,
                    justifyContent: 'space-between',
                    flex: 1,
                }}
            >
                <View>
                    <Item img={Data.img} tit={Data.title} desc={Data.phone} />
                    <View style={{ gap: 24, marginTop: 32 }}>
                        <InputCus tit={'Amount'} styles={[{ color: 'blue' }, { fontSize: 32 }]} isMoney />
                        <InputCus tit={'Promo Code'} />
                        <InputCus tit={'Note'} placeholder={'Note'} desc={'(Optional)'} />
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus onPress={() => navigation.navigate('EWallet')} tit={'Top Up'} />
                </View>
            </View>
        </View>
    );
};

export default TopUpEWallet;
