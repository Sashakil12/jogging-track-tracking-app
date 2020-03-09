import React from "react";
import * as RootNavigation from "../rootNav/RootNavigation";

import createXcontext from "./createXcontext";
import { AsyncStorage } from "react-native";
import tracker from "../api/tracker";
const reducer = (state, action) => {
  switch (action.type) {
    case "SIGN UP ERROR":
    case "SIGN IN ERROR":
      return {
        ...state,
        token: null,
        error: action.payload
      };
    case "SIGN UP":
    case "SIGN IN":
    case "LOCAL SIGN IN":
      return {
        ...state,
        error: "",
        token: action.payload
      };
    case "CLEAR ERROR":
      return {
        ...state,
        error: ""
      };
    case "SIGN OUT":
      return {
        ...state,
        error: "",
        token: null
      };
    default:
      return state;
  }
};

const signUp = dispatch => async ({ email, password }) => {
  ///make api req
  try {
    const response = await tracker.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN UP", payload: response.data.token });
    RootNavigation.navigate("Account");
  } catch (e) {
    dispatch({ type: "SIGN UP ERROR", payload: "Something went wrong!" });
  }
};
const signIn = dispatch => async ({ email, password }) => {
  try {
    const response = await tracker.post("signin", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "SIGN IN", payload: response.data.token });
  } catch (e) {
    dispatch({ type: "SIGN IN ERROR", payload: "Something went wrong" });
  }
};
const signOut = dispatch => async () => {
  await AsyncStorage.removeItem("token");
  dispatch({ type: "SIGN OUT" });
  RootNavigation.navigate("Sign In");
};

const clearError = dispatch => () => {
  dispatch({ type: "CLEAR ERROR" });
};

const logLastUserIn = dispatch => async () => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    dispatch({ type: "LOCAL SIGN IN", payload: token });
    RootNavigation.navigate("Account");
  } else {
    RootNavigation.navigate("Sign In");
  }
};
export const { Context, Provider } = createXcontext(
  reducer,
  { signIn, signUp, signOut, clearError, logLastUserIn },
  { token: null, error: "" }
);
