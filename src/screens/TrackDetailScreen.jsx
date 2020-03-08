import React from "react";
import { View, Text, Button } from "react-native";

export default function TrackDetailScreen({ navigation }) {
  return (
    <View>
      <Text>Account screen</Text>
      <Button
        title="Track List"
        onPress={() => navigation.navigate("Track List")}
      />
    </View>
  );
}
