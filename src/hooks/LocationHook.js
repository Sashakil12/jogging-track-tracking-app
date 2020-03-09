import { useState, useEffect } from "react";

import {
  Accuracy,
  requestPermissionsAsync,
  watchPositionAsync
} from "expo-location";

export default function(shouldTrack, callback) {
  const [err, setErr] = useState(null);
  const [subscriber, setsubscriber] = useState(null);
  const startWatching = async () => {
    const response = await requestPermissionsAsync();

    if (!response.granted) {
      setErr(!response.granted);
    } else {
      const sub = await watchPositionAsync(
        {
          accuracy: Accuracy.BestForNavigation,
          timeInterval: 1000,
          distanceInterval: 10
        },
        callback
      );
      setErr("");
      setsubscriber(sub);
    }
  };
  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setsubscriber(null);
    }
  }, [shouldTrack]);
  return [err];
}
