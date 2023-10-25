import { View, Text, TextInput } from 'react-native';
import NavTop from '../components/NavTop';
import { TouchableOpacity } from 'react-native-gesture-handler';
import InputCus from '../components/InputCus';

const MONEY = [5, 10, 25, 50, 75, 100, 500, 1000];

const MobileData = () => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <NavTop tit={'Manage Your Payments'} />
            <View style={{ marginHorizontal: 16 }}>
                <View style={{ gap: 32, flexDirection: 'row' }}>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, fontWeight: 600, color: '#3B3DBF' }}>Credit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ fontSize: 20, color: '#C5C5C7', fontWeight: 600 }}>Data</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 32 }}>
                    <Text style={{ fontWeight: 500, fontSize: 18, marginBottom: 14 }}>Mobile Number</Text>
                    <InputCus typeNumber placeholder={'Enter phone number'} />
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 12,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginTop: 44,
                        width: '100%',
                    }}
                >
                    {MONEY.map((item, ind) => (
                        <View
                            key={ind}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#3B3DBF',
                                width: '48%',
                                height: 120,
                                borderRadius: 8,
                            }}
                        >
                            <Text style={{ color: '#fff', fontSize: 24, fontWeight: 600 }}>${item}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default MobileData;
