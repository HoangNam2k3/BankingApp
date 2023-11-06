import React, { Component, useEffect, useState } from 'react';
import { Text, View, StyleSheet, 
        Image, TouchableOpacity, 
        Button, FlatList} from 'react-native';
import ButtonCus from '../components/ButtonCus';
import NavTop from '../components/NavTop';
import Dot from '../components/Dot';
import { ScrollView } from 'react-native-virtualized-view';
import RenderHistoryTransaction from '../components/RenderHistoryTransaction';
import { useNavigation } from '@react-navigation/native';

const RenderData1 = ({ item, onpress }) => {
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={{alignItems: 'center',}}>
            <View style={{
                backgroundColor: '#393AB4',
                width: 40,
                height: 40,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 10,
            }}>
                <Image source={item.uri}/>
            </View>
            <Text style={{
                color: '#8A8A8E',
                fontSize: 12,
                fontWeight: '500',
                marginTop: 8,
            }}> {item.text} </Text>
        </View>
        </TouchableOpacity>
    );
};

const RenderData2 = ({ item, onpress }) => {
    return (
        <TouchableOpacity onPress={onpress}>
            <View style={{alignItems: 'center',}}>
            <View>
                <Image source={item.uri}/>
            </View>
            <Text style={{
                color: '#8A8A8E',
                fontSize: 12,
                fontWeight: '500',
                marginTop: 8,
            }}> {item.text} </Text>
        </View>
        </TouchableOpacity>
    );
};

const App = () => {
    const navigation = useNavigation();
    const [stateHistoryTrans,  setStateHistoryTrans] = useState(false);
    const [stateMyQr,  setstateMyQr] = useState(false);

    const toggleStateHistroryTrans = () =>{
        setStateHistoryTrans(value => !value)
    }

    const toggleStateMyQr = () =>{
        setstateMyQr(value => !value)
    }

    useEffect(() => {
        if(stateHistoryTrans === true){
            navigation.navigate('HistoryTransaction')
        }
    }, [stateHistoryTrans])

    useEffect(() => {
        if(stateMyQr === true){
            navigation.navigate('MyQr')
        }
    }, [stateMyQr])
    return (
    <ScrollView>
        
        <View style={styles.container}>
            
                <View style={styles.cardContainer}>
                    <View style={styles.UpperPart}>
                        <View style={styles.UpperParLeft}>
                            <Text style={styles.UperPartText}> Leslie Alexander </Text>
                            <Text style={styles.UperPartText}> 2423 3581 9503 2412 </Text>
                        </View>
                        <View style={styles.UpperPartRight}>
                            <Text style={styles.UperPartTextRight}> A Debit Card </Text>
                            <Text style={styles.UperPartTextRight}> 21 / 24</Text>
                        </View>
                    </View>

                    <View style={styles.LowerPart}>
                        <View style={styles.LowerPartLeft}>
                            <Text style={styles.TextYourBalance}> Your Balance</Text>
                            <Text style={styles.Balance}> $ 3,100.30 </Text>
                        </View>
                        <View style={styles.LowerPartRight}>
                            <Text style={styles.TextYourBalance}> Visa </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.dotFake}>
                    <Dot col='#393AB4'></Dot>
                    <Dot col='#ccc'></Dot>
                    <Dot col = '#ccc'></Dot>
                </View>
       

            <View style={styles.functionally}>
                <RenderData1 item={data1[0]} />
                <RenderData1 item={data1[1]}/>
                <RenderData1 item={data1[2]}/>
                <RenderData1 item={data1[3]} onpress={() => {toggleStateMyQr()}}/>
            </View>

            <View style={styles.SendTo}>
                <View style={styles.ContainHeader}>
                    <Text style={styles.textSendTo}> Send To</Text>
                    <TouchableOpacity style={styles.btnSeeAll}> 
                        <Text style={styles.textSeeAll}> See all </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.functionally}>
                    <RenderData1 item={data2[0]}/>
                    <RenderData2 item={data2[1]}/>
                    <RenderData2 item={data2[2]}/>
                    <RenderData2 item={data2[3]}/>
                    <RenderData2 item={data2[4]}/>
                </View>
            </View>

            <View style={styles.HistoryTransaction}>
                <View style={styles.ContainHeader}>
                    <Text style={styles.textSendTo}> History Transaction </Text>
                    <TouchableOpacity style={styles.btnSeeAll} onPress={() => {toggleStateHistroryTrans()}}> 
                        <Text style={styles.textSeeAll}> See all </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.HistoryTransactionList}>
                    <ScrollView>
                        <FlatList
                        data={data3}
                        renderItem={({item, data3}) => <RenderHistoryTransaction item={item}/>}
                        />
                    </ScrollView>
                </View>
            </View>
        </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',  
        alignItems: 'center',
    },
    whiteBlock: {
        backgroundColor: '#fff',
    },
    cardContainer: {
        backgroundColor: '#393AB4',
        width: '94%',
        height: 172,
        justifyContent: 'space-between',
        borderRadius: 15,
        marginTop: 12,
   },
   UpperPart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   LowerPart:{
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   UperPartText: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
   },
   UperPartTextRight: {
    fontSize: 15,
    fontWeight: '400',
    color: '#fff',
    paddingVertical: 6,
    paddingHorizontal: 12,
   },
   UpperPartRight: {
    alignItems: 'flex-end',
   },
   TextYourBalance: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
    paddingVertical: 8,
    paddingHorizontal: 10,
    opacity: 0.8
   },
   Balance: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
    paddingBottom: 10,
    paddingHorizontal: 10,
   },
   LowerPartRight: {
    justifyContent: 'flex-end',
    padding: 10,
   },
   dotFake: {
    flexDirection: 'row',
    width: '94%',
    justifyContent: 'center',
    marginVertical: 16,
   },
   functionally: {
    flexDirection: 'row',
     width: '94%',
     justifyContent: 'space-between',
   },
   SendTo: {
    width: '94%', 
   },
   ContainHeader: {
    flexDirection: 'row',
    width: '94%',
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 14,
   },
   textSeeAll: {
    color: '#393AB4',
    fontWeight: '700',
    fontSize: 15,
   },
   textSendTo: {
    fontWeight: '700',
    fontSize: 17,
   },
   HistoryTransaction: {
    width: '94%',
   }
});

const data1 = [
    {
        key: 1,
        text: 'Add Balance',
        uri : require('../assets/img/AddBalanceIcon.png'),
    },
    {
        key: 2,
        text: 'Transfer',
        uri : require('../assets/img/TransferIcon.png'),
    },
    {
        key: 3,
        text: 'Pay',
        uri : require('../assets/img/Pay.png'),
    },
    {
        key: 4,
        text: 'Pay with QR',
        uri : require('../assets/img/PayWithQr.png'),
    },
];

const data2 = [
    {
        key: 1,
        text: 'Add Receiver',
        uri: require('../assets/img/Vector.png'),
    },
    {
        key: 2,
        text: 'Joni N.',
        uri: require('../assets/img/Photo1.png'),
    },
    {
        key: 3,
        text: 'Rick S.',
        uri: require('../assets/img/Photo2.png'),
    },
    {
        key: 4,
        text: 'Suna J.',
        uri: require('../assets/img/Photo3.png'),
    },
    {
        key: 5,
        text: 'Big M.',
        uri: require('../assets/img/Photo4.png'),
    },
];

const data3 = [
    {
        key: 1,
        name : 'Robert Fox',
        date: '23 January 2021',
        change: ' - $369,84',
        uri: require('../assets/img/photo5.png'),
    },
    {
        key: 2,
        name : 'Savannah Nguyen',
        date: '12 January 2021',
        change: ' + $589,99',
        uri: require('../assets/img/photo6.png'),
    },
    {
        key: 3,
        name : 'Darrell Steward',
        date: '13 January 2022',
        change: '  + $669',
        uri: require('../assets/img/Photo2.png'),
    },
    {
        key: 4,
        name : 'Michael',
        date: '13 January 2022',
        change: '  + $889,12',
        uri: require('../assets/img/Photo1.png'),
    },
]

export default App;