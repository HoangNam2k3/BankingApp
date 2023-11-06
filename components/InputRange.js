import { useState } from 'react';
import { View } from 'react-native';
import Slider from 'react-native-slider';

const InputRange = ({ target, init, onSliderValueChange }) => {
    const [sliderValue, setSliderValue] = useState(init);
    const onValueChange = (value) => {
        setSliderValue(value);
        onSliderValueChange(value);
    };
    return (
        <View style={{ borderRadius: 999, overflow: 'hidden' }}>
            <Slider
                value={sliderValue}
                onValueChange={onValueChange}
                minimumValue={0}
                maximumValue={target}
                step={target / 100}
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
