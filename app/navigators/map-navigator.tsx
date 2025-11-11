import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AnotherScreen from '../screens/another.screen.tsx';
import MapScreen from '../screens/map.screen.tsx';

const MapStack = createNativeStackNavigator();
const MapNavigator = () => {
  return (
    <MapStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      id={'MapStack'}
    >
      <MapStack.Screen name="Map" component={MapScreen} />
      <MapStack.Screen name="AnotherScreen" component={AnotherScreen} />
    </MapStack.Navigator>
  );
};

export default MapNavigator;
