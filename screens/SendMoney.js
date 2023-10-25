import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { Searchbar } from 'react-native-paper';
import NavTop from '../components/NavTop';
import Noti from '../components/Noti';

// const SendMoney = () => {
//     const [searchQuery, setSearchQuery] = useState('');
//     const [searchResults, setSearchResults] = useState([]);
  
//     const handleSearch = (query) => {
//       const results = performSearch(query);
//       setSearchResults(results);
//     };
  
//     const performSearch = (query) => {
//       const sampleResults = ['Theresa Webb', 'Robert Fox', 'Eleanor Pena', 'Savannah Nguyen'];
//       return sampleResults.filter((result) => result.toLowerCase().includes(query.toLowerCase()));
//     };
  
//     const renderSearchResults = ({ item }) => {
//       return (
//         <View style={{ padding: 16 }}>
//           <TouchableOpacity>
//             <Text>{item}</Text>
//           </TouchableOpacity>
//         </View>
//       );
//     };
  
//     return (
//       <View>
//         <View>
//             <Searchbar
//             placeholder="Search Name..."
//             onChangeText={(query) => {
//                 setSearchQuery(query);
//                 handleSearch(query);
//             }}
//             value={searchQuery}
//             />
//         </View>
//         <FlatList
//           data={searchResults}
//           keyExtractor={( index) => index.toString()}
//           renderItem={renderSearchResults}
//         />

//       </View>
//     );
//   };

const RecentContact =[
  {
    img: require('../assets/TheresaWebb.png'),
    title: 'TheresaWebb',
    time: 'OCB 2413634523'
  },
  {
      img: require('../assets/RobertFox1.png'),
      title: 'Robert Fox',
      time: 'HJT 2413634523'
  },
  {
      img: require('../assets/EleanorPena.png'),
      title: 'Eleanor Pena',
      time: 'EWQ 2413634523'
  },
  {
      img: require('../assets/SavannahNguyen1.png'),
      title: 'Savannah Nguyen',
      time: 'SDA 2413634523'
  },
]

const AddContact =[
  {
    img: require('../assets/TheresaWebb.png'),
    title: 'TheresaWebb',
    time: 'OCB 2413634523'
  },
  {
      img: require('../assets/RobertFox2.png'),
      title: 'Robert Fox',
      time: 'HJT 2413634523'
  },
  {
      img: require('../assets/EleanorPena1.png'),
      title: 'Eleanor Pena',
      time: 'EWQ 2413634523'
  },
]

const SendMoney = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={{marginHorizontal:15}}>
        <NavTop />
        <View style={{backgroundColor:'#FFFFFF', marginTop:10, borderRadius: 10}}>
        <Searchbar
        placeholder="Search Name..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{backgroundColor:'#C5C5C7', marginHorizontal: 5, marginVertical: 5}}
        />
        </View>
        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:10}}>
            <Text style={{color:'#393BB7'}}>Add Receiver</Text>
            <TouchableOpacity>
                <Image source={require('../assets/Plus.png')}/>
            </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.ten}>Recent Contact</Text>
          <Noti DAta={RecentContact} />
          <Text style={styles.ten}>All Contact</Text>
          <Noti DAta={AddContact} />
        </View>
    </View>
  )
}

export default SendMoney
const styles = StyleSheet.create({
  ten:{
      fontSize:14,
      // marginLeft:16, 
      color:'#C5C5C7',
      marginTop:30

  }
})