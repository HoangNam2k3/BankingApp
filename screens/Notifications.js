import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import NavTop from '../components/NavTop'
import Noti from '../components/Noti'

const DATA_ThisWeek = [
    {
        img: require('../assets/Container.png'),
        title: 'Dadang Gantar requested a payment for $1200',
        time: '23 January 2021',
    },
    {
        img: require('../assets/Container2.png'),
        title: 'You receive a payment from Asep ketan for $500',
        time: '23 January 2021',

    },
    {
        img: require('../assets/Container3.png'),
        title: 'You receive a payment from Asep ketan for $500',
        time: '23 January 2021',

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



const Notifications = () => {
  return (
    <View>
        <NavTop tit={'Notification'}/>
        
        <View style={{marginHorizontal: 15}}>

        <Text style={styles.ten}>This Week</Text>
        <Noti DAta={DATA_ThisWeek} />

        <Text style={styles.ten}>This Month</Text>
        <Noti DAta={DATA_ThisMonth} />

        </View>
    </View>
  )
}

export default Notifications
const styles = StyleSheet.create({
    ten:{
        fontSize:14, 
        color:'#C5C5C7',
        marginTop:30

    }
})