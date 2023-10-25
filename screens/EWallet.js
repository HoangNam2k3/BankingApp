import { View, Text, ScrollView } from 'react-native';
import NavTop from '../components/NavTop';
import ButtonCus from '../components/ButtonCus';
import { EWalletCenter_DATA } from '../data';
import Item from '../components/Item';

const EWallet = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <NavTop tit={'E-Wallet Center'} />
            <View
                style={{
                    flexDirection: 'column',
                    backgroundColor: '#fff',
                    flex: 1,
                    justifyContent: 'space-between',
                    marginVertical: 24,
                    paddingHorizontal: 18,
                }}
            >
                <ScrollView>
                    <View style={{ gap: 18 }}>
                        {EWalletCenter_DATA.map((item, ind) => (
                            <Item key={ind} img={item.img} tit={item.title} desc={item.phone} />
                        ))}
                    </View>
                </ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus tit={'Add E-wallet'} />
                </View>
            </View>
        </View>
    );
};

export default EWallet;
