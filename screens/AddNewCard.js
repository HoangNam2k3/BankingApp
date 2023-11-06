import { View, Text } from 'react-native'
import React from 'react'
import Visa from '../components/Visa'
import FormCard from '../components/FormCard'
import ButtonCus from '../components/ButtonCus'
import NavTop from '../components/NavTop'

const AddNewCard = () => {
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#fff'}}>
        <NavTop tit={'Add New Card'} img={require('../assets/More.png')}/>
      </View>

      <View style={{ flex:1, marginVertical: 24}}>
        <View style={{marginHorizontal:15, flex:1}}>
            <Visa/>
            <View style={{marginTop:30}}>
                <FormCard />
            </View>
        </View>
        <View style={{alignItems:'center'}}>
          <ButtonCus tit={'Add New Card'}/>
        </View>
      </View>
    </View>
  )
}

export default AddNewCard