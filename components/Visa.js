import { View, Text, StyleSheet } from 'react-native'
import React from 'react'


const Visa = ({name='Your Name', stk ='XXXX   XXXX   XXXX   XXXX', date='XX / XX', balance='$0'}) => {

  return (
    <View style={styles.part}>
        <View style={styles.spacepart}>
        <View style={styles.group}>
            <Text style={styles.textview11}>{name}</Text>
            <Text style={styles.textview11}>A Debit Card</Text>
        </View>
        <View style={styles.group}>
            <Text style={styles.textview12}>{stk}</Text>
            <Text style={styles.textview12}>{date}</Text>
        </View>
        <View>
            <View style={styles.group1}>
            <View>
                <Text style={styles.textview11}>Your balance</Text>
                <Text style={styles.textview13}>{balance}</Text>
                
            </View>
            <Text style={styles.textview11}>Visa</Text>
            </View>
        </View>
        </View>
    </View>
  )
}

export default Visa
const styles = StyleSheet.create({
    part:{
      marginVertical:5,
      backgroundColor: '#393AB4',
      borderRadius: 10,
      height: 171,
      // marginHorizontal: 5
    },
    part1:{
      marginHorizontal:5,
      marginVertical:5,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      height: 186,
    },
    part2:{
      marginHorizontal:5,
      marginVertical:5,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      height: 221,
    },
    textview11:{
      color:'#FFFFFF',
      fontSize: 12,
    },
    textview12:{
      color:'#FFFFFF',
      fontSize:16,
      fontWeight: '700'
    },
    textview13:{
      color:'#FFFFFF',
      fontSize: 22,
      fontWeight: '900'
    },
    group:{
      flexDirection:'row',
      justifyContent:'space-between',
      flex:1,
    },
    group1:{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      paddingTop:60
    },
    spacepart:{
      marginHorizontal:15,
      marginVertical:15,
      flex:1,
      
    }
    
  })