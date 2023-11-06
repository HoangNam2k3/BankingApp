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

const RequestMoney2 = () => {  
  const [selectedValue, setSelectedValue] = useState('my');
  
  return (
    <View style={{flex:1}}> 
      <View style={{backgroundColor:'#fff'}}>
        <NavTop tit='Request Money' />
      </View>
      <View style={{flex:1, marginVertical:24}}>
        <View style={{marginHorizontal:15, flex:1}}>
            <Noti DAta={Theresa1}/>
            <View style={{marginTop:30}}>
              <Text style={{marginVertical:10, fontWeight:'bold'}}>Amount</Text>
              <TextInput value='$2500.00' keyboardType='numeric' style={{color:'#393BB7', fontSize:36, fontWeight: 'bold', backgroundColor:'#FFFFFF',paddingVertical:5, paddingLeft:15}} />
            </View>
            <View style={{marginTop:10}}>
                <Text style={{marginVertical:10, fontWeight:'bold'}}>Currency</Text>
                <Picker
                  selectedValue={selectedValue}
                  onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                  style={{backgroundColor:'#FFFFFF'}}
                >
                  <Picker.Item label="USD" value="my" />
                  <Picker.Item label="VND" value="viet" />
                  <Picker.Item label="EUR" value="euro" />
                  <Picker.Item label="GPB" value="anh" />
                </Picker>
            </View>
            <View style={{marginTop:10}}>
              <View style={{flexDirection:'row', alignItems:'center',marginVertical:10}}>
                <Text style={{ fontWeight:'bold'}}>Note</Text>
                <Text style={{color:'#C5C5C7'}}> (Optional)</Text>
              </View>
              <TextInput value='Landing Page Design' keyboardType='default' style={{fontSize:14, backgroundColor:'#FFFFFF',paddingVertical:5, paddingLeft:15}} />
            </View>
            <View style={{marginTop:10}}>
              <Text style={{marginVertical:10, fontWeight:'bold'}}>Payment Due</Text>
              <TouchableOpacity style={{backgroundColor:'#FFFFFF', flexDirection:'row', justifyContent:'space-between', paddingHorizontal:15, paddingVertical:5}}>
                <Text>25/03/201</Text>
                <Image source={require('../assets/calendar.png')}/>
              </TouchableOpacity>
            </View>
            <View style={{marginTop:10}}>
              <Text style={{marginVertical:10, fontWeight:'bold'}}>Request payment as</Text>
              <TextInput value='Ehan Nudin' keyboardType='default' style={{fontSize:14, backgroundColor:'#FFFFFF',paddingVertical:5, paddingLeft:15}} />
            </View>
        </View> 
        <View style={{alignItems:'center'}}>
          <ButtonCus tit={'Next'}/>
        </View>
      </View>  
    </View>
  )
}

export default RequestMoney2;
