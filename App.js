import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { Colors, Screens } from './src/utilities/constants';
import Login from './src/screens/Login';
import Categories from './src/screens/Categories';
import Meals from './src/screens/Meals';
import MealDetail from './src/screens/MealDetail';
import Favorites from './src/screens/Favorites';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: Colors.accent
      },
      sceneStyle: {
        backgroundColor: Colors.primary,
        marginBottom: 20
      },
      drawerActiveBackgroundColor: '#0fb8b2',
      drawerActiveTintColor: '#03302f',
      drawerStyle: {
        backgroundColor: Colors.accent
      },
      drawerItemStyle: {
        borderRadius: 4,
      }
    }}>
      <Drawer.Screen name={Screens.categories} options={{ drawerLabel: 'All Categories', title: 'All Categories', drawerIcon: ({ color, size, focused }) => <MaterialIcons name={"category"} size={size} color={color} /> }} component={Categories} />
      <Drawer.Screen name={Screens.favorites} options={{ drawerLabel: 'Favorites', title: 'Favorites', drawerIcon: ({ color, size, focused }) => <MaterialIcons name={"star"} size={size} color={color} /> }} component={Favorites} />
    </Drawer.Navigator>
  )
}

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
            marginBottom: 20
          }

        }}>
          <Stack.Screen name={Screens.login} component={Login} options={{ title: 'Welcome!' }} />
          <Stack.Screen name={Screens.drawer} component={DrawerNavigator} options={{ headerShown: false }} />
          <Stack.Screen name={Screens.meals} component={Meals} options={{ title: 'Meals' }} />
          <Stack.Screen name={Screens.mealDetail} component={MealDetail} options={{ title: 'Meal Details' }} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}
