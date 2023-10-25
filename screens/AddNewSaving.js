import { View, Text, Image } from 'react-native';
import NavTop from '../components/NavTop';
import ButtonCus from '../components/ButtonCus';
import SavingPercent from '../components/SavingPercent';
import InputRange from '../components/InputRange';
import InputCus from '../components/InputCus';
import { useEffect, useState } from 'react';

const AddNewSaving = () => {
    const [targetSaving, setTarget] = useState(0);

    useEffect(() => {}, [targetSaving]);
    return (
        <View style={{ backgroundColor: '#fff', flex: 1 }}>
            <NavTop tit={'Add new Saving'} />
            <View style={{ flex: 1, paddingVertical: 44, justifyContent: 'space-between' }}>
                <View style={{ paddingHorizontal: 16 }}>
                    <Image style={{ width: 110, height: 110 }} source={require('../assets/ImagePlaceholder.png')} />
                    <View style={{ gap: 18, marginTop: 24 }}>
                        <View>
                            <Text style={{ fontSize: 18, marginBottom: 8 }}>Write Your Dream Here</Text>
                            <InputCus placeholder={'Enter your Dream'} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, marginBottom: 8 }}>Write Your Dream Here</Text>
                            <InputCus typeNumber isMoney />
                        </View>
                        <View>
                            <Text style={{ fontSize: 18, marginBottom: 8 }}>Write Your Dream Here</Text>
                            <InputCus typeNumber isMoney onChange={(text) => setTarget(text)} />
                        </View>

                        <SavingPercent maxVal={targetSaving} minVal={0}>
                            <InputRange />
                        </SavingPercent>
                    </View>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <ButtonCus tit={'Add Saving'} />
                </View>
            </View>
        </View>
    );
};

export default AddNewSaving;
