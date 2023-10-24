import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Dot = ({col = '#fff'}) => {
    return (
        <TouchableOpacity style={{
                 width: 8,
                 height: 8,
                 borderRadius: 25,
                 backgroundColor: col,
                 marginRight: 18,
                 marginVertical: 24,
            }}>
        </TouchableOpacity>
    );
};

export default Dot;