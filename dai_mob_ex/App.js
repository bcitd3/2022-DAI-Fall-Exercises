import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import AnimationScreen from './screens/Animation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/Home'




//useFocusEffect
// const Drawer = createDrawerNavigator();
//https://reactnavigation.org/docs/modal - for modals



export const Stack = createNativeStackNavigator();


export default function App() {
  return (

    <NavigationContainer>
      {/* <Drawer.Navigator initialRouteName="Animation">
      </Drawer.Navigator> */}
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" comopnent={HomeScreen} />
        <Stack.Screen name="ghibli" component={AnimationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
