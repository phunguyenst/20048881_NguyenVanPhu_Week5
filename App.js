import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack"; 

import screen1 from './screens/Trang1';
import screen2 from './screens/Trang2';
const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="screen1" component={screen1} options={{headerShown: false} }/>
        {/* <Stack.screen name="screen2" component={screen2} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

