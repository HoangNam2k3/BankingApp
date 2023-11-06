import { View, Text, Image } from 'react-native';
import NavTop from '../components/NavTop';
import ButtonCus from '../components/ButtonCus';
import InputRange from '../components/InputRange';
import InputCus from '../components/InputCus';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const AddNewSaving = () => {
    const navigation = useNavigation();

    const [targetSaving, setTarget] = useState(0);
    const [initBalance, setInitBalance] = useState(0);

    useEffect(() => {}, [targetSaving, initBalance]);
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <NavTop tit={'Add new Saving'} />
            <View style={{ flex: 1, paddingVertical: 44, justifyContent: 'space-between' }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Image style={{ width: 110, height: 110 }} source={require('../assets/ImagePlaceholder.png')} />
                    <View style={{ gap: 18, marginTop: 24 }}>
                        <InputCus tit={'Write Your Dream Here'} placeholder={'Enter your Dream'} />

                        <InputCus tit={'Target Savings'} typeNumber isMoney onChange={(val) => setTarget(val)} />

                        <InputCus
                            tit={'Initial Balance'}
                            val={initBalance && initBalance}
                            typeNumber
                            isMoney
                            onChange={(val) => setInitBalance(val)}
                        />

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
                                <Text style={{ color: '#8A8A8E' }}>${targetSaving}</Text>
                            </View>
                            <InputRange
                                target={parseInt(targetSaving)}
                                init={parseInt(initBalance)}
                                onSliderValueChange={setInitBalance}
                            />
                        </View>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus onPress={() => navigation.navigate('WithdrawMoney')} tit={'Add Saving'} />
                </View>
            </View>
        </View>
    );
};

export default AddNewSaving;
