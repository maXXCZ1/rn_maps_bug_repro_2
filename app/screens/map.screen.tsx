import { Alert, Button, Dimensions, Platform, View } from 'react-native';
import { MapMarker, PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from 'react-native-map-clustering';
import { useContext, useRef } from 'react';
import {
  INITIAL_MARKER_ARRAY_STATE,
  MapContext,
} from '../infstrastructure/contexts/map.context.tsx';
import { StackActions, useNavigation } from '@react-navigation/native';
import { ButtonContainer } from '../components/button/button-basic.component.tsx';
import Ionicons from '@react-native-vector-icons/ionicons';

const windowDim = Dimensions.get('window');
const platformIsAndroid = Platform.OS === 'android';
export const windowHeight = windowDim.height;
export const windowWidth = windowDim.width;

const initialRegion = {
  latitude: 50.0755,
  longitude: 14.4378,
  latitudeDelta: 4,
  longitudeDelta: 4,
};
const MapScreen = () => {
  const { markers, setMarkers } = useContext(MapContext);
  const mapRef = useRef<MapView | null>(null);

  const navigation = useNavigation();

  const navigateToAnotherScreen = () => {
    navigation.dispatch(StackActions.push('AnotherScreen'));
  };

  const resetMarkers = () => {
    setMarkers(INITIAL_MARKER_ARRAY_STATE);
  };

  return (
    <View style={{ flex: 1}}>
      <MapView
        clusterColor={'blue'}
        provider={platformIsAndroid ? PROVIDER_GOOGLE : undefined}
        ref={mapRef}
        style={{
          position: 'relative',
          width: windowWidth,
          height: windowHeight,
          flex: 1,
        }}

        initialRegion={initialRegion}

        minZoomLevel={5}
        maxZoomLevel={21}
        moveOnMarkerPress={false}
        onPress={() => Alert.alert('Map onPress working')}
        pitchEnabled={platformIsAndroid}
        rotateEnabled={false}
        toolbarEnabled={false}
        animationEnabled={false}
        showsPointsOfInterest={platformIsAndroid ? undefined : false}
        radius={Platform.OS === 'android' ? 20 : 17}
      >
        <>
          {markers.map(markerObj => (
            <MapMarker
              key={markerObj.id}
              coordinate={{
                latitude: markerObj.latitude,
                longitude: markerObj.longitude,
              }}
              title={`Marker ${markerObj.id}`}
              stopPropagation={true}
            >
              <Ionicons name={'location'} size={24} color={'black'} />
            </MapMarker>
          ))}
        </>
      </MapView>
      <ButtonContainer>
        <Button
          title="Navigate To New Stack Screen"
          onPress={navigateToAnotherScreen}
        />
      </ButtonContainer>
      <ButtonContainer>
        <Button title="Reset markers" onPress={resetMarkers} />
      </ButtonContainer>
    </View>
  );
};

export default MapScreen;
