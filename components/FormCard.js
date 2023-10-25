import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const FormCard = ({yourname='  Your Name', number='  Your Card Number', date='  Your Exp Card Date', cvv='  Your Card CVV'}) => {
  return (
    <View>
      <Text style={styles.text}>Name on card</Text>
      <TextInput value={yourname} style={styles.textinput}/>

      <Text style={styles.text}>Card Number</Text>
      <TextInput value={number} style={styles.textinput}/>

      <View style={{flexDirection:'row', justifyContent:'space-between'}}>
          <View>
              <Text style={styles.text}>Exp Date</Text>
              <TextInput value={date} style={styles.textinput1}/>
          </View>
          <View>
              <Text style={styles.text}>CVV</Text>
              <TextInput value={cvv} style={styles.textinput1}/>
          </View>
      </View>
    </View>
  )
}

export default FormCard
const styles = StyleSheet.create({
  text:{
    fontWeight:'bold'
  },
  textinput:{
    borderWidth:1, 
    height: 40, 
    fontSize:12, 
    borderRadius:4, 
    borderColor:'#393AB4',
    marginVertical:10
  },
  textinput1:{
    borderWidth:1, 
    height: 40, 
    fontSize:12, 
    borderRadius:4, 
    borderColor:'#393AB4',
    width:168,
    marginVertical:10
  }
})