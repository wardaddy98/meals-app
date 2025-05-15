import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Colors, Screens } from './src/utilities/constants';
import Login from './src/screens/Login';
import Categories from './src/screens/Categories';
import Meals from './src/screens/Meals';
import MealDetail from './src/screens/MealDetail';


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
            backgroundColor: Colors.primary,
            marginBottom:20
          }
        }}>
          <Stack.Screen name={Screens.login} component={Login} options={{ title: 'Welcome!' }} />
          <Stack.Screen name={Screens.categories} component={Categories} options={{ title: 'Categories' }} />
          <Stack.Screen name={Screens.meals} component={Meals} options={{title:'Meals'}}/>
          <Stack.Screen name={Screens.mealDetail} component={MealDetail} options={{title:'Meal Details'}}/>
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
