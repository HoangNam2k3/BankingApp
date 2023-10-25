import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
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
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 44,
    },
});
