import { View, Text } from 'react-native';
import NavTop from '../components/NavTop';
import ButtonCus from '../components/ButtonCus';
import InputRange from '../components/InputRange';
import InputCus from '../components/InputCus';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const WithdrawMoney = () => {
    const navigation = useNavigation();

    const [initBalance, setInitBalance] = useState(0);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <NavTop tit={'Withdraw Money'} />
            <View style={{ flex: 1, justifyContent: 'space-between', paddingVertical: 24 }}>
                <View style={{ paddingHorizontal: 18 }}>
                    <View>
                        <Text style={{ fontSize: 24, fontWeight: 700 }}>Withdraw money from Playstation 5 Saving</Text>
                        <Text style={{ marginVertical: 18, color: '#8A8A8E' }}>
                            Pay your bills and top up your account
                        </Text>
                    </View>
                    <View>
                        <InputCus tit={'Amount to Withdraw'} isMoney />
                    </View>
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginTop: 12,
                                marginBottom: 8,
                                justifyContent: 'space-between',
                            }}
                        >
                            <Text style={{ color: '#8A8A8E' }}>${initBalance}</Text>
                            <Text style={{ color: '#8A8A8E' }}>${2000}</Text>
                        </View>
                        <InputRange target={2000} init={initBalance} onSliderValueChange={setInitBalance} />
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus onPress={() => navigation.navigate('Saving')} tit={'Withdraw'} />
                </View>
            </View>
        </View>
    );
};

export default WithdrawMoney;
