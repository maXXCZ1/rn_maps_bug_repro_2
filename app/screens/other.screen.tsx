import {Button, View} from 'react-native';
import React, { useContext } from 'react';
import { MyContext } from '../../App.tsx';

const OtherScreen = () => {
  const { reloadAppStateFunc } = useContext(MyContext);
  const handleButtonReloadPress = () => {
    reloadAppStateFunc();
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title={'ReloadApp'}
        onPress={handleButtonReloadPress}
        style={{ width: 150 }}
      />
    </View>
  );
};

export default OtherScreen;
