import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MapScreen from "../screens/map.screen.tsx";
import OtherScreen from "../screens/other.screen.tsx";


const OtherStackNavigator = createNativeStackNavigator();
const OtherNavigator = () => {

    return (
        <OtherStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}
            id="MapStack"
        >
            <OtherStackNavigator.Screen name="Map" component={OtherScreen} />
        </OtherStackNavigator.Navigator>
    )

}

export default OtherNavigator;
