import React from "react";
import createXcontext from "./createXcontext";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD LOCATION":
      const newLocationArr = state.recording
        ? [...state.locations, action.payload]
        : [...state.locations];
      return {
        ...state,
        currentLocation: action.payload,
        locations: newLocationArr
      };
    case "TOGGLE RECORDING":
      const newlocations = state.recording ? state.locations : [];
      return {
        ...state,
        locations: newlocations,
        recording: !state.recording
      };
    case "SET NAME":
      return {
        ...state,
        name: action.payload
      };
    case "RESET":
      return {
        name: "unnamed",
        currentLocation: null,
        locations: [],
        recording: false
      };
    default:
      return state;
  }
};

const toggleRecording = dispatch => () => {
  dispatch({ type: "TOGGLE RECORDING" });
};

const addLocation = dispatch => location => {
  dispatch({ type: "ADD LOCATION", payload: location });
};
const changeName = dispatch => name =>
  dispatch({ type: "SET NAME", payload: name });

const reset = dispatch => () => dispatch({ type: "RESET" });

export const { Context, Provider } = createXcontext(
  reducer,
  {
    toggleRecording,
    addLocation,
    changeName,
    reset
  },
  { name: "unnamed", currentLocation: null, locations: [], recording: false }
);
