import React, { useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { Context as LocationCtx } from "../context/locationContext";

import MapView, { Polyline, Circle } from "react-native-maps";

const Map = () => {
  const {
    state: { locations, currentLocation }
  } = React.useContext(LocationCtx);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }
  //Must render inside a View element otherwise circle wont render
  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        <Circle
          center={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude
          }}
          radius={40}
          strokeColor="rgba(158,158,255,1.0)"
          fillColor="rgba(158,158,255,0.3)"
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});
export default Map;
