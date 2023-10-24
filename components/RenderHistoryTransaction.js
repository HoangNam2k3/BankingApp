import React from "react";
import {Text, View, Image, TouchableOpacity} from 'react-native'

const RenderHistoryTransaction = ({ item }) => {
    return(
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginVertical: 8,
        }}>
            <View style={{
                flexDirection: 'row',
            }}>
                <Image source={item.uri}/>
                
                <View style={{
                    justifyContent: 'space-around',
                    marginLeft: 8,
                }}>
                    <Text style={{
                        fontSize: 14,
                        fontWeight: '500',
                        
                    }}> {item.name} </Text>
                    <Text style={{
                        fontSize: 12,
                        fontWeight: '300',
                        color: '#C5C5C7',
                    }}> {item.date} </Text>
                </View>
            </View>

            <View style={{
                justifyContent: 'center',
            }}>
                <Text style={{
                    color: '#EC5B22',
                }}> {item.change} </Text>
            </View>
        </View>
    );
};

export default RenderHistoryTransaction;