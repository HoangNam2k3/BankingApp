import React from "react";
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NavTop from "../components/NavTop";
import { FlatList } from "react-native-gesture-handler";
import RenderHistoryTransaction from "../components/RenderHistoryTransaction";

const Button = ({ title, col}) =>{
    return (
        <TouchableOpacity style={{
            height: 54, 
            marginLeft: 20,
            marginRight: 10,
            paddingVertical: 16,
        }}>
            <Text style={{
                color: col,
                fontSize: 16,
                fontWeight: '700',
            }}>
                {title} 
            </Text>
        </TouchableOpacity>
    );
};

const HistoryTransaction = () => {
    return (
        <View style={styles.container}>
            <NavTop tit={'History Transaction'}/>

            <View style={styles.BarButton}>
                <Button title={'All'} col={'#393AB4'}/>
                <Button title={'Income'} col={'#c5c5c7'}/>
                <Button title={'Outcome'} col={'#c5c5c7'}/>
            </View>

            <View style={styles.ContainerMainPart}>
                <View style={styles.Content}>
                    <View style={styles.containerDateMonth}>
                        <Text sytle={styles.dateMonth}> January </Text>
                    </View>
                    <View>
                        <FlatList
                        data={data}
                        renderItem={({item, data}) => <RenderHistoryTransaction item={item}/>}                        
                        />
                    </View>
                </View>

                <View style={styles.Content}>
                     <View style={styles.containerDateMonth}>
                        <Text style={styles.dateMonth}> December </Text>
                    </View>
                    <View>
                        <FlatList
                        data={data2}
                        renderItem={({item, data}) => <RenderHistoryTransaction item={item}/>}                        
                        />
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    BarButton: {
        flexDirection: 'row',     
        width: '100%',
        alignItems: 'flex-start',
    },
    ContainerMainPart: {
        width: '94%',
        marginHorizontal: '3%',
    },
    dateMonth: {
        fontSize: 12,
        fontWeight: '500',
        color: '#C5C5C7',      
    },
    containerDateMonth: {
        marginVertical: 12,
    },
    Content: {
        
    }
});

const data = [
    {
        key: 1,
        name : 'Cameron Williamson',
        date: '23 January 2021',
        change: ' + $96.84',
        uri: require('../assets/img/Photo7.png'),
    },
    {
        key: 2,
        name : 'Esther Howard',
        date: '12 January 2021',
        change: ' - $396.84',
        uri: require('../assets/img/Photo8.png'),
    },
    {
        key: 3,
        name : 'Cameron Williamson',
        date: '23 December 2020',
        change: '  + $96.84',
        uri: require('../assets/img/Photo9.png'),
    },
    {
        key: 4,
        name : 'Esther Howard',
        date: '23 December 2020',
        change: ' + $96.84',
        uri: require('../assets/img/Photo10.png'),
    },
];

const data2 = [
    {
        key: 1,
        name : 'Cameron Williamson',
        date: '23 December 2020',
        change: ' + $96.84',
        uri: require('../assets/img/Photo11.png'),
    },
    {
        key: 2,
        name : 'Esther Howard',
        date: '12 December 2020',
        change: ' - $396.84',
        uri: require('../assets/img/Photo12.png'),
    },
]
export default HistoryTransaction;