import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper'
import NavTop from '../components/NavTop';
import ButtonCus from '../components/ButtonCus';
import Noti from '../components/Noti';
import { useNavigation } from '@react-navigation/native';


const MostRecentPayer_DATA = [
    {
        img: require('../assets/JennyWilson.png'),
        title: 'Jenny Wilson',
        time: 'jennywilson@gmail.com',
        price: '+ $96.84',
    },
    {
        img: require('../assets/BrooklynSimmons.png'),
        title: 'Brooklyn Simmons',
        time: 'brooklynsimmons@gmail.com',
        price: '+ $96.84',
    },
    {
        img: require('../assets/SavannahNguyen2.png'),
        title: 'Savannah Nguyen',
        time: 'savannahnguyen@gmail.com',
        price: '+ $96.84',
    },
    {
        img: require('../assets/CourtneyHenry.png'),
        title: 'Courtney Henry',
        time: 'courtneyhenry@gmail.com',
        price: '+ $96.84',
    },
];

const RequestMoney = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);
    const navigation = useNavigation()

  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:'#fff'}}>
            <NavTop tit={'Request Money'}/>
        </View>
        <View style={{marginHorizontal:15, flex:1}}>
            <Searchbar
                placeholder='Search Name...'
                onChangeText={onChangeSearch}
                value={searchQuery}
                style={{backgroundColor:'#fff', marginTop:10}}
            />
            <Text style={{fontWeight: 700}}>Add New Payer</Text>
            <TextInput placeholder='Enter Email, Name or Company' style={{fontSize: 14, borderWidth: 0.5, borderRadius:5, borderColor:'#C5C5C7', marginVertical:15}}/>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <ButtonCus tit={'Next'} onPress={() => navigation.navigate("RequestMoney2")}/>
            </View>
            <Noti DAta={MostRecentPayer_DATA} name={'Most Recent Payer'}/>
        </View>
    </View>
  )
}

export default RequestMoney