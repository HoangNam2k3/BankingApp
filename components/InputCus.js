import { View, Text, TextInput } from 'react-native';

const InputCus = ({ val, tit, desc, placeholder, typeNumber, isMoney = false, styles = [], onChange }) => {
    return (
        <View style={{ gap: 8 }}>
            <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: '500' }}>{tit}</Text>
                {desc && <Text style={{ color: '#C5C5C7', fontSize: 18 }}>{desc}</Text>}
            </View>
            <View
                style={{
                    width: '100%',
                    borderWidth: 1,
                    borderColor: '#EBE4E4',
                    padding: 12,
                    alignItems: 'center',
                    flexDirection: 'row',
                    borderRadius: 8,
                }}
            >
                {isMoney && <Text style={[...styles]}>$</Text>}
                <TextInput
                    style={[{ flex: 1, marginLeft: 4, fontSize: 18 }, [...styles]]}
                    placeholder={placeholder}
                    keyboardType={typeNumber ? 'numeric' : 'default'}
                    onChangeText={onChange ? (text) => onChange(text) : undefined}
                >
                    {val && val}
                </TextInput>
            </View>
        </View>
    );
};

export default InputCus;
