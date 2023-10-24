import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppIntroSlider from 'react-native-app-intro-slider';
import Splash from './screens/Splash';
import Onboarding from './screens/Onboarding';
import EnterPin from './screens/EnterPin';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './screens/Home';
import HistoryTransaction from './screens/HistoryTransaction';
import MyQr from './screens/MyQr';
import CustomeDrawer from './components/CustomeDrawer';
import { useNavigation } from '@react-navigation/native';

const Drawer = createDrawerNavigator();
function HomeDrawer(){
    const navigation = useNavigation();

    return(
        <Drawer.Navigator drawerContent={(props) => <CustomeDrawer props={props}/>} initialRouteName='Dashboard'>
            <Drawer.Screen name='Dashboard' component={Home} options={{
                headerTitle: '',
                headerRight: (() => {
                   return (
                    <TouchableOpacity >
                     <Image source={require('./assets/img/NotificationBell.png')} style={{marginHorizontal: 20}}/>
                    </TouchableOpacity>
                   );
                }),
                drawerIcon: (() => {
                    return(
                        <Image source={require('./assets/img/homeIcon.png')}/>
                    )
                })
            }}/>
            {data.map((item, ind)=> {
                return (
                    <Drawer.Screen key={ind} name={item.name} component={item.comp} options={{
                        headerShown: false,
                        drawerIcon: (({color}) => {
                            return(
                                <Image source={item.src}/>
                            )
                        })
                    }}/>
                );
            })}
         </Drawer.Navigator>
    );
};
const data = [
    {
        name: 'Balance', 
        src: require('./assets/img/BalanceIcon.png'),
        comp: MyQr
    },
    {       
        name: 'Savings', 
        src: require('./assets/img/NotificationBell.png'),
        comp: MyQr
    },
    {
        name: 'E-Wallet', 
        src: require('./assets/img/WalletIcon.png'),
        comp: MyQr
    },
    {
        name: 'Bills Payments', 
        src: require('./assets/img/Cart.png'),
        comp: MyQr
    },
    {
        name: 'Saving', 
        src: require('./assets/img/Money.png'),
        comp: MyQr
    },
    {
        name: 'Statistic', 
        src: require('./assets/img/Chart.png'),
        comp: MyQr
    },
    {
        name: 'My Card', 
        src: require('./assets/img/Card.png'),
        comp: MyQr
    },
    {
        name: 'Send Money', 
        src: require('./assets/img/Up.png'),
        comp: MyQr
    },
    {
        name: 'Request Money', 
        src: require('./assets/img/Down.png'),
        comp: MyQr
    },
    {
        name: 'ATM Center', 
        src: require('./assets/img/Map-pin.png'),
        comp: MyQr
    },
    {
        name: 'Logout', 
        src: require('./assets/img/LogoutIcon.png'),
        comp: MyQr
    },
]

// const HomeStack = createStackNavigator();
// function HomeStackScreen() {
//     return(
//         <HomeStack.Navigator initialRouteName='Home'>
//             <HomeStack.Screen name='Home' component={Home} options={{headerShown: false}}/>
//             <HomeStack.Screen name='HistoryTransaction'component={HistoryTransaction} options={{headerShown: false}}/>
//             <HomeStack.Screen name='MyQr' component={MyQr} options={{headerShown: false}}/>
//         </HomeStack.Navigator>
//     );
// };

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name ="Onboarding" component={Onboarding} options={{headerShown: false}} />
                <Stack.Screen name='EnterPin' component={EnterPin} options={{headerShown: false}}/>
                <Stack.Screen name='HomeDrawer' component={HomeDrawer} options={{headerShown: false}}/>
                <Stack.Screen name='HistoryTransaction'component={HistoryTransaction} options={{headerShown: false}}/>
                <Stack.Screen name='MyQr' component={MyQr} options={{headerShown: false}}/>     
            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 44,
    },
});
