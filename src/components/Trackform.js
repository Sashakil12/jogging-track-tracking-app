import React, { useContext } from "react";
import { Input, Button } from "react-native-elements";
import Spacer from "./spacer";
import { Context as LocationContext } from "../context/locationContext";
import usesaveTrack from "../context/saveTrackHelper";
const TrackForm = () => {
  const {
    state: { recording, name, locations },
    toggleRecording,
    changeName
  } = useContext(LocationContext);
  const [saveTrack] = usesaveTrack();
  return (
    <>
      <Input
        value={name}
        onChangeText={changeName}
        placeholder="Enter Track Name"
      />
      <Spacer />
      <Button
        title={!recording ? "Start Recording" : "Stop Recording"}
        onPress={toggleRecording}
      />
      <Spacer />
      {locations.length && !recording ? (
        <Button title="Save Track" onPress={() => saveTrack()} />
      ) : null}
    </>
  );
};

export default TrackForm;
