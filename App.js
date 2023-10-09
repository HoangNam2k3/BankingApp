import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from './screens/Splash';
import Notifications from './screens/Notifications';
import NavTop from './components/NavTop';
import Profile from './screens/Profile';

const Stack = createStackNavigator();
export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Profile">
                {/* <Stack.Screen name="Notification" component={Notifications} options={{ headerShown: false }} /> */}
                <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
                <Stack.Screen name="NavTop" component={NavTop}  />

            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 44,
    },
});
