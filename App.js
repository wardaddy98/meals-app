import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Colors, Screens } from './src/utilities/constants';
import Login from './src/screens/Login';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style='dark' />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={Screens.login} screenOptions={{
          headerStyle: {
            backgroundColor: Colors.accent
          },
          contentStyle: {
            backgroundColor: Colors.primary
          }
        }}>
          <Stack.Screen name={Screens.login} component={Login} options={{ title: 'Welcome!' }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
