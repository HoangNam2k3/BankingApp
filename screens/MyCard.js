import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper';
import NavTop from '../components/NavTop'
import Visa from '../components/Visa'
import AppIntroSlider from 'react-native-app-intro-slider';
import Noti from '../components/Noti';

const MyCard = () => {
  const visas =[
    {name:'Leslie Alexander' ,stk:'2423   3581   9503   2412' ,date:'21 / 24' ,balance:'$3,100.30'},
    {name:'Leslie Alexander' ,stk:'2423   3581   9503   2412' ,date:'21 / 24' ,balance:'$3,100.30'},
    {name:'Leslie Alexander' ,stk:'2423   3581   9503   2412' ,date:'21 / 24' ,balance:'$3,100.30'},
  ];

  const transaction =[
    {
      img: require('../assets/Shopping.png'),
      // img: require('../assets/SavannahNguyen2.png'),

      title: 'Shopping',
      time: '12 Transactions',
      price: '$100',
    },
    {
      img: require('../assets/Transportation.png'),
      // img: require('../assets/SavannahNguyen2.png'),
      
      title: 'Transportation',
      time: '24 Transactions',
      price: '$50',
    },
    {
      img: require('../assets/Food.png'),
      // img: require('../assets/SavannahNguyen2.png'),


      title: 'Food',
      time: '8 Transactions',
      price: '$100',
    },
  ];
  
  
  return (
    <View style={{flex:1}}>
      <NavTop img={require('../assets/More.png')} tit={'My Card'}/>

      <View style={styles.container}>
        <AppIntroSlider
          renderItem={({ item }) => <Visa name={item.name} stk={item.stk} date={item.data} balance={item.balance}/>}
          data={visas}
          showNextButton={false}
          showDoneButton={false}

        />

        <View style={styles.part1}>
          <View style={styles.spacepart}> 
            <View style={styles.group}>
              <Text style={{fontSize:16, fontWeight:'700'}}>Set Card Limit</Text>
              <TouchableOpacity>
                <Image source={require('../assets/More.png')}/>
              </TouchableOpacity>
            </View>
            <View style={styles.group}>
              <Image source={require('../assets/Chart.png')}/>
              <View>
                <Text style={{color:'#8A8A8E'}}>Limit Transaction</Text>
                <Text style={{fontWeight:'600'}}>$1,000</Text>
                <Text style={{color:'#8A8A8E'}}>Total Spent this Month</Text>
                <Text style={{fontWeight:'600'}}>$250</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.part2}>
          <View style={styles.spacepart}> 
            <View style={styles.group}>
              <Text style={{fontSize:16, fontWeight:'700'}}>Transaction</Text>
            </View>
            <View>
              <Noti DAta={transaction} colorer={{backgroundColor:'#393AB4', height: 40, width: 40, borderRadius:8, alignItems: 'center', justifyContent: 'center'}}/>
            </View>
          </View>
        </View>


      </View>
    </View>
  )
}

export default MyCard
const styles = StyleSheet.create({
  container:{
    marginHorizontal: 10,
    flex:1
  },
  wrapper: {},
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  part:{
    marginHorizontal:5,
    marginVertical:5,
    backgroundColor: '#393AB4',
    borderRadius: 10,
    height: 171,
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
    fontSize: 12
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
    alignItems: 'center'
  },
  group1:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    paddingTop:70
  },
  spacepart:{
    marginHorizontal:15,
    marginVertical:15,
    flex:1,
    
  }
  
})