import { View, Text, ScrollView } from 'react-native';
import NavTop from '../components/NavTop';
import Saving from '../components/Saving';
import ButtonCus from '../components/ButtonCus';
import { useNavigation } from '@react-navigation/native';

const SAVING_DATA = [
    {
        src: require('../assets/house.png'),
        tit: 'White House',
        init: 1100,
        target: 25000,
    },
    {
        src: require('../assets/ps5.png'),
        tit: 'Playstation 5',
        init: 679,
        target: 999,
    },
    {
        src: require('../assets/ip13.png'),
        tit: 'Iphone 13',
        init: 800,
        target: 1200,
    },
];

const MySaving = () => {
    const navigation = useNavigation();
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <NavTop tit={'My Saving'} />
            <View
                style={{
                    width: '100%',
                    flex: 1,
                    marginBottom: 44,
                    marginTop: 24,
                }}
            >
                <ScrollView>
                    <View style={{ gap: 18, paddingHorizontal: 18 }}>
                        {SAVING_DATA.map((item, ind) => (
                            <Saving key={ind} item={item} />
                        ))}
                    </View>
                </ScrollView>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus onPress={() => navigation.navigate('AddNewSaving')} tit={'Add new Saving'} />
                </View>
            </View>
        </View>
    );
};

export default MySaving;
