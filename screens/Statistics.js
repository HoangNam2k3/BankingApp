import { View, Text, Image, ScrollView } from 'react-native';
import NavTop from '../components/NavTop';
import Item from '../components/Item';

const Statistics = () => {
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <NavTop tit={'Statistics'} img={require('../assets/more_vert.png')} />
            <View>
                <View
                    style={{ alignItems: 'center', justifyContent: 'center', marginHorizontal: 18, marginBottom: 32 }}
                >
                    <View style={{ flexDirection: 'row', gap: 12, alignItems: 'center' }}>
                        <Text style={{ fontWeight: 600 }}>01 Mar 2021 - 31 Mar 2021</Text>
                        <Image source={require('../assets/calendar_today.png')} />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 18, marginTop: 24 }}>
                        <View
                            style={{
                                paddingVertical: 24,
                                gap: 8,
                                alignItems: 'center',
                                width: '50%',
                                elevation: 12,
                                backgroundColor: '#fff',
                            }}
                        >
                            <Image source={require('../assets/arrow-bottom.png')} />
                            <Text style={{ color: '#8A8A8E', marginTop: 8 }}>Income</Text>
                            <Text style={{ fontSize: 18, fontWeight: 700 }}>$ 5000</Text>
                        </View>
                        <View
                            style={{
                                paddingVertical: 24,
                                gap: 8,
                                alignItems: 'center',
                                width: '50%',
                                elevation: 12,
                                backgroundColor: '#F4F4F5',
                            }}
                        >
                            <Image source={require('../assets/arrow-top.png')} />
                            <Text style={{ color: '#8A8A8E', marginTop: 8 }}>Income</Text>
                            <Text style={{ fontSize: 18, fontWeight: 700 }}>$ 5000</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <Text style={{ marginLeft: 18, fontSize: 18, fontWeight: 700 }}>Expenses Trend</Text>
                    <Image style={{ width: '100%' }} source={require('../assets/Statistic.png')} />
                </View>
                <View style={{ paddingHorizontal: 18, marginTop: 24 }}>
                    <Text style={{ fontSize: 18, marginBottom: 16, color: '#8A8A8E' }}>Highest Expenses</Text>
                    <ScrollView>
                        <View style={{ gap: 18 }}>
                            <Item
                                img={require('../assets/CameronWilliamson.png')}
                                tit={'Transfer To Jenny Wil Jenny Wil'}
                                desc={'15 march 2021'}
                            />
                            <Item
                                img={require('../assets/CameronWilliamson.png')}
                                tit={'Transfer To Jenny Wil Jenny Wil'}
                                desc={'15 march 2021'}
                            />
                            <Item
                                img={require('../assets/CameronWilliamson.png')}
                                tit={'Transfer To Jenny Wil Jenny Wil'}
                                desc={'15 march 2021'}
                            />
                            <Item
                                img={require('../assets/CameronWilliamson.png')}
                                tit={'Transfer To Jenny Wil Jenny Wil'}
                                desc={'15 march 2021'}
                            />
                            <Item
                                img={require('../assets/CameronWilliamson.png')}
                                tit={'Transfer To Jenny Wil Jenny Wil'}
                                desc={'15 march 2021'}
                            />
                            <Item
                                img={require('../assets/CameronWilliamson.png')}
                                tit={'Transfer To Jenny Wil Jenny Wil'}
                                desc={'15 march 2021'}
                            />
                        </View>
                    </ScrollView>
                </View>
            </View>
        </View>
    );
};

export default Statistics;
