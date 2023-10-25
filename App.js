import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
<<<<<<< HEAD
import Notifications from './screens/Notifications';
import NavTop from './components/NavTop';
import Profile from './screens/Profile';
import MyCard from './screens/MyCard';
import InformationCard from './screens/InformationCard';
import Visa from './components/Visa';
import AddNewCard from './screens/AddNewCard';
import SendMoney from './screens/SendMoney';
import Noti from './components/Noti';
import RequestMoney2 from './screens/RequestMoney2';
import SendMoney2 from './screens/SendMoney2';
import TransferSuccess from './screens/TransferSuccess';
=======
import EWallet from './screens/EWallet';
import WithdrawMoney from './screens/WithdrawMoney';
import TopUpEWallet from './screens/TopUpEWallet';
import AtmCenter from './screens/AtmCenter';
import Statistics from './screens/Statistics';
import AddNewSaving from './screens/AddNewSaving';
import BillPayments from './screens/BillPayments';
import MobileData from './screens/MobileData';
import MySaving from './screens/MySaving';
>>>>>>> c2b35a2f22c3095e2f3685778e5386b760aab462

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
<<<<<<< HEAD
            <Stack.Navigator initialRouteName="Notifications">
                <Stack.Screen name="Notifications" component={Notifications} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
                <Stack.Screen name="MyCard" component={MyCard} options={{ headerShown: false }}/>
                <Stack.Screen name="InformationCard" component={InformationCard} options={{ headerShown: false }}/>
                <Stack.Screen name="AddNewCard" component={AddNewCard} options={{ headerShown: false }}/>
                <Stack.Screen name="SendMoney" component={SendMoney} options={{ headerShown: false }}/>
                <Stack.Screen name="Noti" component={Noti} options={{ headerShown: false }}/>
                <Stack.Screen name="RequestMoney2" component={RequestMoney2} options={{ headerShown: false }}/>
                <Stack.Screen name="SendMoney2" component={SendMoney2} options={{ headerShown: false }}/>
                <Stack.Screen name="TransferSuccess" component={TransferSuccess} options={{ headerShown: false }}/>
                <Stack.Screen name="NavTop" component={NavTop}  />
                <Stack.Screen name="Visa" component={Visa}  />
=======
            <Stack.Navigator initialRouteName="EWallet">
                <Stack.Screen name="EWallet" component={Statistics} options={{ headerShown: false }} />
                <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} options={{ headerShown: false }} />
>>>>>>> c2b35a2f22c3095e2f3685778e5386b760aab462
            </Stack.Navigator>
        </NavigationContainer>
    );
}
