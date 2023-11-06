import { View, Text, Image, TouchableOpacity } from 'react-native';

const Bill = ({ src, tit, onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ alignItems: 'center', justifyContent: 'flex-end', backgroundColor: '#fff' }}
        >
            <View style={{ padding: 12, backgroundColor: 'rgba(0, 0, 0, 0.03)', borderRadius: 8, marginTop: 18 }}>
                <Image source={src} />
            </View>
            <Text style={{ marginVertical: 18 }}>{tit}</Text>
        </TouchableOpacity>
    );
};

export default Bill;
