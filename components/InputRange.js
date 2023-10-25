import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from 'react-native-slider';

const InputRange = ({ maxVal = 100 }) => {
    const [sliderValue, setSliderValue] = useState(0);
    useEffect(() => {}, [maxVal]);
    return (
        <View style={{ borderRadius: 999, overflow: 'hidden' }}>
            <Slider
                value={sliderValue}
                onValueChange={(value) => setSliderValue(value)}
                minimumValue={0}
                maximumValue={maxVal}
                step={1}
                minimumTrackTintColor="#3B3DBF"
                maximumTrackTintColor="gray"
                thumbTintColor="#3B3DBF"
                style={{ width: '100%' }}
                trackStyle={{ height: 12 }}
            />
        </View>
    );
};

export default InputRange;
