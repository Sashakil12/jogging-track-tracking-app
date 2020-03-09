import React, { useContext } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { withNavigation } from "react-navigation";
import { Context as TrackCtx } from "../context/tracksContext";
import MapView, { Polyline } from "react-native-maps";
function TrackDetailScreen({ route, navigation }) {
  const { state } = useContext(TrackCtx);
  const _id = route.params._id;
  const track = state.find(t => t._id === _id);
  const initCoords = track.locations[0].coords;
  return (
    <View>
      <Text>{track.name}</Text>
      <MapView
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initCoords
        }}
        style={styles.mapv}
      >
        <Polyline coordinates={track.locations.map(loc => loc.coords)} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  mapv: {
    height: 400
  }
});

export default withNavigation(TrackDetailScreen);
