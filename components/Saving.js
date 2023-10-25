import { View, Text, Image } from 'react-native';
import SavingPercent from './SavingPercent';

const Saving = ({ item }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={item.src} />
            <View style={{ flex: 1, marginLeft: 16 }}>
                <Text style={{ fontSize: 18, fontWeight: 600 }}>White House</Text>
                <SavingPercent minVal={item.init} maxVal={item.target}>
                    <View style={{ width: '100%', borderRadius: 999, backgroundColor: '#ccc', height: 12 }}>
                        <View
                            style={{
                                width: `${(item.init / item.target) * 100}%`,
                                borderRadius: 999,
                                backgroundColor: 'blue',
                                height: 12,
                            }}
                        />
                    </View>
                </SavingPercent>
            </View>
        </View>
    );
};

export default Saving;
