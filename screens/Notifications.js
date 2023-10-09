import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import NavTop from '../components/NavTop'

const DATA_ThisWeek = [
    {
        img: require('../assets/Container.png'),
        title: 'Dadang Gantar requested a payment for $1200',
        time: '23 January 2021'
    },
    {
        img: require('../assets/Container2.png'),
        title: 'You receive a payment from Asep ketan for $500',
        time: '23 January 2021'
    },
    {
        img: require('../assets/Container3.png'),
        title: 'You receive a payment from Asep ketan for $500',
        time: '23 January 2021'
    },
    
]

const DATA_ThisMonth=[
    {
        img: require('../assets/Container4.png'),
        title: 'Dadang Gantar requested a payment for $1200',
        time: '23 January 2021'
    },
    {
        img: require('../assets/Container5.png'),
        title: 'You receive a payment from Asep ketan for $500',
        time: '23 January 2021'
    },
]

const Item_ThisWeek = ({item}) => {
    return(
        <View style={styles.container}>
            <Image source={item.img}/>
            <View style={{
                flex:1,
                flexDirection:'column',
                marginLeft:16,
                marginRight:100

            }}>
                <Text style={{fontSize:16, fontWeight:700}}>{item.title}</Text>
                <Text style={{fontSize:12, color:'#C5C5C7'}}>{item.time}</Text>

            </View>
        </View>
    )
}

const Item_ThisMonth = ({item}) => {
    return(
        <View style={styles.container}>
            <Image source={item.img}/>
            <View style={{
                flex:1,
                flexDirection:'column',
                marginLeft:16,
                marginRight:100

            }}>
                <Text style={{fontSize:16, fontWeight:700}}>{item.title}</Text>
                <Text style={{fontSize:12, color:'#C5C5C7'}}>{item.time}</Text>

            </View>
        </View>
    )
}

const Notifications = () => {
  return (
    <View>
        <NavTop tit={'Notification'}/>
        <Text style={{fontSize:14, marginLeft:16, color:'#C5C5C7'}}>This Week</Text>
        <FlatList
            data={DATA_ThisWeek}
            renderItem={Item_ThisWeek}  
        />

        <Text style={{fontSize:14, marginTop:40, marginLeft:16, color:'#C5C5C7'}}>This Month</Text>
        <FlatList
            data={DATA_ThisMonth}
            renderItem={Item_ThisMonth}  
        />
    </View>
  )
}

export default Notifications
const styles = StyleSheet.create({
    container:{
        paddingHorizontal:16,
        flexDirection:'row',
        alignItems:'flex-end',
        marginTop:20

    }
})