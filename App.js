import 'react-native-gesture-handler';
import { Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
import MobileData from './screens/MobileData';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeDrawer = () => {
    const navigation = useNavigation();
    return (
        <Drawer.Navigator drawerContent={(props) => <CustomeDrawer props={props} />} initialRouteName="Dashboard">
            <Drawer.Screen
                name="Dashboard"
                component={Home}
                options={{
                    headerTitle: '',
                    headerRight: () => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
                                <Image
                                    source={require('./assets/img/NotificationBell.png')}
                                    style={{ marginHorizontal: 20 }}
                                />
                            </TouchableOpacity>
                        );
                    },
                    drawerIcon: () => {
                        return <Image source={require('./assets/img/homeIcon.png')} />;
                    },
                }}
            />
            {DRAWER_DATA.map((item, ind) => {
                return (
                    <Drawer.Screen
                        key={ind}
                        name={item.name}
                        component={item.comp}
                        options={{
                            headerShown: false,
                            drawerIcon: ({ color }) => {
                                return <Image source={item.src} />;
                            },
                        }}
                    />
                );
            })}
        </Drawer.Navigator>
    );
};
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
                {SCREEN_DATA.map((item, ind) => (
                    <Stack.Screen key={ind} name={item.name} component={item.component} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const DRAWER_DATA = [
    {
        name: 'Balance',
        src: require('./assets/img/BalanceIcon.png'),
        comp: InformationCard,
    },
    {
        name: 'EWallet',
        src: require('./assets/img/WalletIcon.png'),
        comp: EWallet,
    },
    {
        name: 'Bills Payments',
        src: require('./assets/img/Cart.png'),
        comp: BillPayments,
    },
    {
        name: 'Saving',
        src: require('./assets/img/Money.png'),
        comp: MySaving,
    },
    {
        name: 'Statistic',
        src: require('./assets/img/Chart.png'),
        comp: Statistics,
    },
    {
        name: 'My Card',
        src: require('./assets/img/Card.png'),
        comp: MyCard,
    },
    {
        name: 'Send Money',
        src: require('./assets/img/Up.png'),
        comp: SendMoney,
    },
    {
        name: 'Request Money',
        src: require('./assets/img/Down.png'),
        comp: RequestMoney,
    },
    {
        name: 'ATM Center',
        src: require('./assets/img/Map-pin.png'),
        comp: AtmCenter,
    },
    {
        name: 'Logout',
        src: require('./assets/img/LogoutIcon.png'),
        comp: Splash,
    },
];
const SCREEN_DATA = [
    { name: 'AddNewCard', component: AddNewCard },
    { name: 'AddNewSaving', component: AddNewSaving },
    { name: 'EnterPin', component: EnterPin },
    { name: 'HistoryTransaction', component: HistoryTransaction },
    { name: 'HomeDrawer', component: HomeDrawer },
    { name: 'MobileData', component: MobileData },
    { name: 'MyQr', component: MyQr },
    { name: 'Notifications', component: Notifications },
    { name: 'Onboarding', component: Onboarding },
    { name: 'Profile', component: Profile },
    { name: 'RequestMoney2', component: RequestMoney2 },
    { name: 'RequestSuccess', component: RequestSuccess },
    { name: 'SendMoney2', component: SendMoney2 },
    { name: 'Splash', component: Splash },
    { name: 'TopUpEWallet', component: TopUpEWallet },
    { name: 'TransferSuccess', component: TransferSuccess },
    { name: 'WithdrawMoney', component: WithdrawMoney },
];
