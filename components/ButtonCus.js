import { View, Text, TouchableOpacity } from 'react-native';

const ButtonCus = ({ tit, col = '#fff', bg = '#3B3DBF', onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: '90%',
                alignItems: 'center',
                paddingVertical: 12,
                borderRadius: 999,
                backgroundColor: bg,
            }}
            onPress={onPress}
        >
            <Text style={{ color: col, fontSize: 18, fontWeight: 700}}>{tit}</Text>
        </TouchableOpacity>
    );
};

export default ButtonCus;
