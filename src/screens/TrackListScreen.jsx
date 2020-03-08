import React from "react";
import { View, Text, Button } from "react-native";

export default function TrackListScreen({ navigation }) {
  return (
    <View>
      <Text>Track list screen</Text>
      <Button
        title="Track Details"
        onPress={() => navigation.navigate("Track Details")}
      />
    </View>
  );
}
