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
import WithdrawMoney from './screens/WithdrawMoney';
import EWallet from './screens/EWallet';
import MySaving from './screens/MySaving';
import BillPayments from './screens/BillPayments';
import Statistics from './screens/Statistics';
import MyCard from './screens/MyCard';
import SendMoney from './screens/SendMoney';
import RequestMoney2 from './screens/RequestMoney2';
import AtmCenter from './screens/AtmCenter';
import AddNewSaving from './screens/AddNewSaving';
import TopUpEWallet from './screens/TopUpEWallet';
import RequestMoney from './screens/RequestMoney';
import Notifications from './screens/Notifications';
import Profile from './screens/Profile';
import InformationCard from './screens/InformationCard';
import AddNewCard from './screens/AddNewCard';
import SendMoney2 from './screens/SendMoney2';
import RequestSuccess from './screens/RequestSuccess';
import TransferSuccess from './screens/TransferSuccess';

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
        comp: InformationCard
    },
    {
        name: 'E-Wallet', 
        src: require('./assets/img/WalletIcon.png'),
        comp: EWallet
    },
    {
        name: 'Bills Payments', 
        src: require('./assets/img/Cart.png'),
        comp: BillPayments
    },
    {
        name: 'Saving', 
        src: require('./assets/img/Money.png'),
        comp: MySaving
    },
    {
        name: 'Statistic', 
        src: require('./assets/img/Chart.png'),
        comp: Statistics
    },
    {
        name: 'My Card', 
        src: require('./assets/img/Card.png'),
        comp: MyCard
    },
    {
        name: 'Send Money', 
        src: require('./assets/img/Up.png'),
        comp: SendMoney
    },
    {
        name: 'Request Money', 
        src: require('./assets/img/Down.png'),
        comp: RequestMoney
    },
    {
        name: 'ATM Center', 
        src: require('./assets/img/Map-pin.png'),
        comp: AtmCenter
    },
    {
        name: 'Logout', 
        src: require('./assets/img/LogoutIcon.png'),
        comp: Splash
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
            <Stack.Navigator initialRouteName="Splash">
                <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
                <Stack.Screen name ="Onboarding" component={Onboarding} options={{headerShown: false}} />
                <Stack.Screen name='EnterPin' component={EnterPin} options={{headerShown: false}}/>
                <Stack.Screen name='HomeDrawer' component={HomeDrawer} options={{headerShown: false}}/>
                <Stack.Screen name='HistoryTransaction'component={HistoryTransaction} options={{headerShown: false}}/>
                <Stack.Screen name='MyQr' component={MyQr} options={{headerShown: false}}/>     
                <Stack.Screen name="AddNewSaving" component={AddNewSaving} options={{ headerShown: false }} />
                <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} options={{ headerShown: false }} />
                <Stack.Screen name="TopUpEWallet" component={TopUpEWallet} options={{ headerShown: false }} />
                <Stack.Screen name="SendMoney2" component={SendMoney2} options={{ headerShown: false }} />
                <Stack.Screen name="RequestMoney2" component={RequestMoney2} options={{ headerShown: false }} />
                <Stack.Screen name="AddNewCard" component={AddNewCard} options={{ headerShown: false }} />
                {/* <Stack.Screen name="TransferSuccess" component={TransferSuccess} options={{ headerShown: false }} /> */}




                

            </Stack.Navigator>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 44,
    },
});
