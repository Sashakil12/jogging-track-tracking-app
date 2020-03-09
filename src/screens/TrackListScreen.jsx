import React, { useContext } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TracksContext } from "../context/tracksContext";

export default function TrackListScreen({ navigation }) {
  const { state, fetchTracks } = useContext(TracksContext);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      fetchTracks();
    });

    return unsubscribe;
  }, [navigation]);
  return (
    <FlatList
      data={state}
      keyExtractor={item => item._id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("Track Details", { _id: item._id })
            }
          >
            <ListItem chevron title={item.name} />
          </TouchableOpacity>
        );
      }}
    />
  );
}
