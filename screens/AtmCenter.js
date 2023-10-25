import { View, Text, Image, ScrollView } from 'react-native';
import NavTop from '../components/NavTop';
import { ATMCenter_DATA } from '../data';
import Item from '../components/Item';

const AtmCenter = () => {
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <NavTop tit={'ATM Center'} />
            <View style={{ flex: 1 }}>
                <Image style={{ width: '100%', marginVertical: 12 }} source={require('../assets/Maps.png')} />
                <View style={{ flex: 1 }}>
                    <ScrollView>
                        <View style={{ gap: 18, paddingHorizontal: 18, marginTop: 24 }}>
                            {ATMCenter_DATA.map((item, ind) => (
                                <Item key={ind} img={item.img} tit={item.title} desc={item.add} km={item.km} />
                            ))}
                            {ATMCenter_DATA.map((item, ind) => (
                                <Item key={ind} img={item.img} tit={item.title} desc={item.add} km={item.km} />
                            ))}
                            {ATMCenter_DATA.map((item, ind) => (
                                <Item key={ind} img={item.img} tit={item.title} desc={item.add} km={item.km} />
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default AtmCenter;
