import { Button, View } from 'react-native';
import React, { useContext } from 'react';
import { MapContext } from '../infstrastructure/contexts/map.context.tsx';
import { getRandomNumber } from '../infstrastructure/helpers/numbers.ts';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ButtonContainer } from '../components/button/button-basic.component.tsx';

const AnotherScreen = () => {
  const { setMarkers, markers } = useContext(MapContext);
  const navigation = useNavigation();

  const goBack = () => navigation.dispatch(StackActions.pop());
  const removeSomeMarkerObjects = () => {
    const newMarkersObj = markers.slice(0, getRandomNumber(4, 9));
    setMarkers(newMarkersObj);
    setTimeout(() => {
      goBack();
    }, 50);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ButtonContainer>
        <Button
          title={'Remove some markers and return'}
          onPress={removeSomeMarkerObjects}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button title="Go back to Map Screen" onPress={goBack} />
      </ButtonContainer>
    </View>
  );
};
export default AnotherScreen;
