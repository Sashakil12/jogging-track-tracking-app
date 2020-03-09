import React from "react";
import createXContext from "./createXcontext";
import tracker from "../api/tracker";

const reducer = (state, action) => {
  switch (action.type) {
    case "CREATE TRACK":
      return [...state, action.payload];
    case "FETCH TRACKS":
      return action.payload;

    default:
      return state;
  }
};

const fetchTracks = dispatch => async () => {
  const res = await tracker.get("/tracks");
  dispatch({ type: "FETCH TRACKS", payload: res.data });
};
const createTrack = dispatch => async (name, locations) => {
  try {
    await tracker.post("/tracks", { name, locations });
    dispatch({ type: "CREATE TRACK", payload: { name, locations } });
  } catch (e) {
    return;
  }
};

export const { Context, Provider } = createXContext(
  reducer,
  { fetchTracks, createTrack },
  []
);
