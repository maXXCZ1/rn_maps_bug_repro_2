import {createNativeStackNavigator} from "@react-navigation/native-stack";
import MapScreen from "../screens/map.screen.tsx";
import {AppContent} from "../../App.tsx";
import AppContentScreen from "../screens/app-content.screen.tsx";

const InitialStackNavigator = createNativeStackNavigator();
const InitialNavigator = () => {


    return (
        <InitialStackNavigator.Navigator
            screenOptions={{
                headerShown: false,
            }}
            id="InitialStack"
        >
            <InitialStackNavigator.Screen name="Appcontent" component={AppContentScreen} />
        </InitialStackNavigator.Navigator>
    )
}

export default InitialNavigator
