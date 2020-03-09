// import "../_mockLocation";
import React, { useContext, useState } from "react";
import { SafeAreaView } from "react-native";
import Map from "../components/Map";
import Spacer from "../components/spacer";
import { Text } from "react-native-elements";
import useLocation from "../hooks/LocationHook";
import { Context as LocationCtx } from "../context/locationContext";
import TrackForm from "../components/Trackform";
export default function TrackCreateScreen({ navigation }) {
  const {
    state: { recording },
    addLocation
  } = useContext(LocationCtx);
  const [focus, setfocus] = useState(false);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setfocus(true);
    });

    return unsubscribe;
  }, [navigation]);
  React.useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setfocus(false);
    });

    return unsubscribe;
  }, [navigation]);

  const [err] = useLocation(focus || recording, addLocation);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text h3>Create a Track</Text>
      <Map />
      <Spacer />
      {err ? <Text h4>"please allow location" </Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
}
