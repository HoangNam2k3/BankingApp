import { View, Text } from 'react-native';
import NavTop from '../components/NavTop';
import InputMoney from '../components/InputCus';
import ButtonCus from '../components/ButtonCus';
import SavingPercent from '../components/SavingPercent';
import InputRange from '../components/InputRange';
import InputCus from '../components/InputCus';

const WithdrawMoney = () => {
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
                        <Text style={{ fontSize: 18, marginBottom: 8 }}>Amount to Withdraw</Text>
                        <InputCus isMoney />
                    </View>
                    <SavingPercent>
                        <InputRange />
                    </SavingPercent>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus tit={'Withdraw'} />
                </View>
            </View>
        </View>
    );
};

export default WithdrawMoney;
