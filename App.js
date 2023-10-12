import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import EWallet from './screens/EWallet';
import WithdrawMoney from './screens/WithdrawMoney';
import TopUpEWallet from './screens/TopUpEWallet';
import AtmCenter from './screens/AtmCenter';
import Statistics from './screens/Statistics';
import AddNewSaving from './screens/AddNewSaving';
import BillPayments from './screens/BillPayments';
import MobileData from './screens/MobileData';
import MySaving from './screens/MySaving';

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="EWallet">
                <Stack.Screen name="EWallet" component={Statistics} options={{ headerShown: false }} />
                <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
