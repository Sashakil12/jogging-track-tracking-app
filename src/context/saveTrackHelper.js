import { useContext } from "react";

import { Context as LocationContext } from "./locationContext";
import { Context as TracksContext } from "./tracksContext";
import * as RootNavigation from "../rootNav/RootNavigation";

export default function() {
  const {
    state: { name, locations },
    reset
  } = useContext(LocationContext);

  const { createTrack } = useContext(TracksContext);

  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    RootNavigation.navigate("Tracks");
  };
  return [saveTrack];
}
