/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  Button,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigatorComponent from './app/components/app-navigator.component.tsx';
import {
  NavigationContainer,
  TabActions,
  useNavigation,
} from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { MapContextProvider } from './app/infstrastructure/contexts/map.context.tsx';

enableScreens(false);

export const MyContext = createContext({});

export const MyProvider = ({
  children,
  reloadApp,
  setReloadApp,
  reloadAppStateFunc,
}: {
  children: React.ReactNode;
  reloadApp: boolean;
  setReloadApp: Dispatch<SetStateAction<boolean>>;
  reloadAppStateFunc: () => void;
}) => {
  return (
    <MyContext.Provider value={{ reloadApp, setReloadApp, reloadAppStateFunc }}>
      {children}
    </MyContext.Provider>
  );
};
function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [reloadApp, setReloadApp] = useState(false);

  const reloadAppStateFunc = () => {
    setReloadApp(true);

    setTimeout(() => {
      setReloadApp(false);
    }, 1000);
  };

  if (reloadApp)
    return (
      <View
        style={{
          backgroundColor: 'lightblue',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>Reloading...</Text>
      </View>
    );
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MapContextProvider>
          <MyProvider
            reloadApp={reloadApp}
            setReloadApp={setReloadApp}
            reloadAppStateFunc={reloadAppStateFunc}
          >
            <StatusBar
              barStyle={isDarkMode ? 'light-content' : 'dark-content'}
            />
            <AppNavigatorComponent />
          </MyProvider>
        </MapContextProvider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export const AppContent = () => {
  const { reloadAppStateFunc } = useContext(MyContext);
  const navigation = useNavigation();
  const handleButtonReloadPress = () => {
    navigation.dispatch(TabActions.jumpTo('other'));
  };

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 16 }}>
        <Text style={{ fontSize: 24 }}>
          Jump to another tab without focusing map tab.
        </Text>
      </View>
      <View style={{ marginTop: 16 }}>
        <Button
          title={'Jump to other tab'}
          onPress={handleButtonReloadPress}
          style={{ width: 150 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
