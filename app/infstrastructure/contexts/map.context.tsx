import React, {createContext, Dispatch, SetStateAction, useState} from 'react';

export const INITIAL_MARKER_ARRAY_STATE = [
    { id: 1, latitude: 49.558846, longitude: 14.301949 },
    { id: 2, latitude: 49.548285, longitude: 15.505655 },
    { id: 3, latitude: 50.213082, longitude: 15.547480 },
    { id: 4, latitude: 49.618075, longitude: 13.944429 },
    { id: 5, latitude: 49.482860, longitude: 14.821434 },
    { id: 6, latitude: 50.452695, longitude: 14.859616 },
    { id: 7, latitude: 49.544194, longitude: 14.120322 },
    { id: 8, latitude: 50.730686, longitude: 14.843679 },
    { id: 9, latitude: 49.572329, longitude: 14.478893 },
    { id: 10, latitude: 50.105415, longitude: 15.742698 },
]

type MapMarkerType = {
    id: number;
  latitude: number;
  longitude: number;
};
interface IMapContext {
  markers: MapMarkerType[];
  setMarkers: Dispatch<SetStateAction<MapMarkerType[]>>;
}

export const MapContext = createContext<IMapContext>({
  markers: [],
  setMarkers: () => [],
});

interface IMapContextProvider {
  children: React.ReactNode;
}

export const MapContextProvider = ({ children }: IMapContextProvider) => {
  const [markers, setMarkers] = useState(INITIAL_MARKER_ARRAY_STATE);

  return (
    <MapContext.Provider value={{ markers, setMarkers }}>
      {children}
    </MapContext.Provider>
  );
};
