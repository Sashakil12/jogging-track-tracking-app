import React from "react";
import createXcontext from "./createXcontext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD LOCATION":
      return {
        ...state,
        currentLocation: action.payload,
        locations: [...state.locations, action.payload]
      };
    case "TOGGLE RECORDING":
      return {
        ...state,
        recording: !state.recording
      };
    default:
      return state;
  }
};

const toggleRecording = dispatch => () =>
  dispatch({ type: "TOGGLE RECORDING" });

const addLocation = dispatch => location => {
  dispatch({ type: "ADD LOCATION", payload: location });
};

export const { Context, Provider } = createXcontext(
  reducer,
  {
    toggleRecording,
    addLocation
  },
  { currentLocation: null, locations: [], recording: false }
);
