import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const Noti = ({DAta, colorer, name}) => {
    
    
    const Item = ({item}) => {
        return(
            <View>
                <TouchableOpacity>
                <View style={styles.container}>
                    <View style={colorer}>
                        <Image source={item.img}/>
                    </View>
                    <View style={{
                        flex:1,
                        flexDirection:'column',
                        marginLeft:16,
                        marginRight:55,
                        paddingVertical:5
                    }}>
                        <Text style={{fontSize:16, fontWeight:700, flex:1}}>{item.title}</Text>
                        <Text style={{fontSize:12, color:'#C5C5C7'}}>{item.time}</Text>
                    </View>
                    <Text style={{fontSize: 16, fontWeight:700, color:'#EC5B22'}}>{item.price}</Text>
                </View>
                </TouchableOpacity>
            </View>
        )
    }
  return (
    <View>
        <Text style={styles.ten}>{name}</Text>
        <FlatList
            data={DAta}
            renderItem={Item}  
        />
    </View>
  )
}

export default Noti
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:6,
    },
    ten:{
        fontSize:14,
        color:'#C5C5C7',
        marginVertical: 10
    }
})