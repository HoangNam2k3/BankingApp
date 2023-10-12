import { View, Text, Image } from 'react-native';

const Item = ({ img, tit, desc, amount, km }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', gap: 16 }}>
                <Image source={img} />
                <View
                    style={{
                        flex: 1,
                        flexDirection: 'row',
                        gap: 24,
                    }}
                >
                    <View style={{ gap: 8, flex: 1, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 18, fontWeight: 700 }}>{tit}</Text>
                        <Text style={{ fontSize: 14, color: '#C5C5C7' }}>{desc}</Text>
                    </View>
                    {amount && (
                        <Text style={{ alignSelf: 'flex-start', color: '#EC5B22', fontSize: 18, fontWeight: 700 }}>
                            {amount}
                        </Text>
                    )}
                    {km && (
                        <Text style={{ alignSelf: 'flex-end', color: '#8A8A8E', fontSize: 14, fontWeight: 600 }}>
                            {km}
                        </Text>
                    )}
                </View>
            </View>
        </View>
    );
};

export default Item;
