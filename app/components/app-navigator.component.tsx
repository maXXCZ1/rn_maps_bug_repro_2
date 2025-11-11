import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MapNavigator from '../navigators/map-navigator.tsx';
import InitialNavigator from '../navigators/initial-navigator.tsx';
import { Text, View } from 'react-native';
import OtherNavigator from "../navigators/other-navigator.tsx";

const InitialStack = createNativeStackNavigator();
const TabNavigator = createBottomTabNavigator();
const AppNavigatorComponent = () => {
  return (
    <InitialStack.Navigator>
      <InitialStack.Screen
        name={'home'}
        component={RenderStacks}
        options={{ headerShown: false }}
      />

    </InitialStack.Navigator>
  );
};

export default AppNavigatorComponent;

const RenderStacks = () => {
  return (
    <TabNavigator.Navigator
      id={'test'}
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        lazy: false,
      }}
    >

      <TabNavigator.Screen key={'map'} name={'map'} component={MapNavigator} />
        <TabNavigator.Screen key={'other'} name={'other'} component={OtherNavigator} />
    </TabNavigator.Navigator>
  );
};
