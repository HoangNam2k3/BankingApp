import { View, Text, TextInput } from 'react-native'
import React from 'react'
import NavTop from '../components/NavTop'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FormCard from '../components/FormCard'
import Visa from '../components/Visa'
import ButtonCus from '../components/ButtonCus'

const InformationCard = () => {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#fff'}}>
        <NavTop tit={'Card Information'} img={require('../assets/More.png')}/>
      </View>

      <View style={{ flex:1, marginVertical: 24}}>
        <View style={{marginHorizontal:15, flex:1}}>
            <Visa name='Leslie Alexander' stk='2423   3581   9503   2412' date='21 / 24' balance='$3,100.30'/>
            <View style={{flexDirection:'row', marginVertical:30}}>
              <Text style={{color:'#393AB4', fontSize:16, marginRight:20, fontWeight:'bold'}}>Card Information</Text>
              <TouchableOpacity>
                  <Text style={{color:'#C5C5C7', fontSize:16, fontWeight:'bold'}}>Settings</Text>
              </TouchableOpacity>
            </View>

            <View style={{}}>
                <FormCard yourname={'  Leslie Alexander'} number={'  2423 3581 9503 2412'} date={'  12/24'} cvv={'  234'}/>
            </View>
        </View>
        <View style={{alignItems:'center'}}>
          <ButtonCus tit={'Save'}/>
        </View>
      </View>
    </View>
  )
}

export default InformationCard