import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import GeneralScreen from '../screens/GeneralScreen';
import NavUserScreen from '../screens/NavUserScreen';
import RecursosScreen from '../screens/RecursosScreen';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nav" component={NavUserScreen}/>
      <Stack.Screen name="Drawer_Welcome" component={MyDrawer} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Welcome" component={WelcomeScreen} />
        <Drawer.Screen name="General" component={GeneralScreen} />
        <Drawer.Screen name='Recursos' component={RecursosScreen}/>
    </Drawer.Navigator>
  );
}

export default function MainNavigator(){
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}