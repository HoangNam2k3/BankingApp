import { View, Text, TextInput, Image } from 'react-native';
import NavTop from '../components/NavTop';
import Bill from '../components/Bill';
import { useNavigation } from '@react-navigation/native';

const BILL_DATA = [
    {
        src: require('../assets/lightning.png'),
        tit: 'Electricity',
    },
    {
        src: require('../assets/shopping_cart.png'),
        tit: 'E-Commerce',
    },
    {
        src: require('../assets/phone_iphone.png'),
        tit: 'Mobile & Data',
    },
    {
        src: require('../assets/train.png'),
        tit: 'Transportation',
    },
    {
        src: require('../assets/wifi.png'),
        tit: 'TV & Internet',
    },
    {
        src: require('../assets/Heart.png'),
        tit: 'Pharmacy',
    },
    {
        src: require('../assets/Coupon-3.png'),
        tit: 'Tickets',
    },
    {
        src: require('../assets/hotel.png'),
        tit: 'Hotel',
    },
    {
        src: require('../assets/flight.png'),
        tit: 'Flight',
    },
    {
        src: require('../assets/local_gas_station.png'),
        tit: 'Fuel',
    },
    {
        src: require('../assets/videogame_asset.png'),
        tit: 'Pay Google play',
    },
    {
        src: require('../assets/Noodle-1.png'),
        tit: 'Food & Drink',
    },
];

const BillPayments = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <NavTop tit={'Manage Your Payments'} />
            <View style={{ marginHorizontal: 16 }}>
                <View
                    style={{
                        marginTop: 8,
                        flexDirection: 'row',
                        paddingVertical: 16,
                        backgroundColor: '#fff',
                    }}
                >
                    <TextInput
                        style={{ flex: 1, fontSize: 18, paddingRight: 6, paddingLeft: 18 }}
                        placeholder="Search Payments..."
                    />
                    <Image style={{ marginRight: 16 }} source={require('../assets/ActionSearch.png')} />
                </View>
                <View style={{ marginTop: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: 600 }}>Your Bills</Text>
                    <Text style={{ color: '#8A8A8E', marginVertical: 12 }}>Pay your bills and top up your account</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: 12,
                    }}
                >
                    {BILL_DATA.map((item, ind) => (
                        <View
                            key={ind}
                            style={{
                                width: '30%',
                                shadowColor: '#000',
                                backgroundColor: '#fff',
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.9,
                                shadowRadius: 8.3,
                                elevation: 4,
                            }}
                        >
                            <Bill onPress={() => navigation.navigate('MobileData')} src={item.src} tit={item.tit} />
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default BillPayments;
