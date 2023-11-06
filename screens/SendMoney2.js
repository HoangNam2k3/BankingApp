import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
import Noti from '../components/Noti';
import NavTop from '../components/NavTop';
import { Picker } from '@react-native-picker/picker';
import ButtonCus from '../components/ButtonCus';
const Theresa1 =[
    {
      img: require('../assets/TheresaWebb.png'),
      title: 'TheresaWebb',
      time: 'OCB 2413634523'
    },
  ]

const SendMoney2 = () => {  
  const [selectedValue, setSelectedValue] = useState('my');
  
  return (
    <View style={{flex:1}}> 
      <View style={{backgroundColor:'#fff'}}>
        <NavTop tit={'Send Money'} img={require('../assets/More.png')}/>
      </View>
      <View style={{flex:1, backgroundColor:'#F4F4F5'}}>
        <View style={{marginHorizontal:15, flex:1}}>
            <Noti DAta={Theresa1}/>
            <View style={{marginTop:30}}>
              <Text style={{marginVertical:10, fontWeight:'bold'}}>Amount</Text>
              <TextInput placeholder='$2500.00' placeholderTextColor={'#393BB7'} keyboardType='numeric' style={{color:'#393BB7', fontSize:36, fontWeight: 'bold', backgroundColor:'#FFFFFF',paddingVertical:5, paddingLeft:15}} />
            </View>
            <View style={{marginTop:10}}>
              <Text style={{marginVertical:10, fontWeight:'bold'}}>Category</Text>
              <TextInput value='Shopping' keyboardType='default' style={{fontSize:14, backgroundColor:'#FFFFFF',paddingVertical:5, paddingLeft:15}} />
            </View>
            <View style={{marginTop:10}}>
              <View style={{flexDirection:'row', alignItems:'center',marginVertical:10}}>
                <Text style={{ fontWeight:'bold'}}>Note</Text>
                <Text style={{color:'#C5C5C7'}}> (Optional)</Text>
              </View>
              <TextInput value='Landing Page Design' keyboardType='default' style={{fontSize:14, backgroundColor:'#FFFFFF',paddingVertical:5, paddingLeft:15}} />
            </View>
            
            
        </View> 
        <View style={{alignItems:'center'}}>
          <ButtonCus tit={'Next'}/>
        </View>
      </View>  
    </View>
  )
}

export default SendMoney2;
