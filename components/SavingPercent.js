import { useEffect } from 'react';
import { View, Text } from 'react-native';

const SavingPercent = ({ children, maxVal = 1, minVal = 0 }) => {
    useEffect(() => {}, [maxVal]);
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop: 12,
                    marginBottom: 8,
                    justifyContent: 'space-between',
                }}
            >
                <Text style={{ color: '#8A8A8E' }}>${minVal}</Text>
                <Text style={{ color: '#8A8A8E' }}>${maxVal}</Text>
            </View>
            {children && <View>{children}</View>}
        </View>
    );
};

export default SavingPercent;
