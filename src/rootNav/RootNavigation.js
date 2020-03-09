// RootNavigation.js

import * as React from "react";

export const isMountedRef = React.createRef();

export const navigationRef = React.createRef();

export function navigate(name, params) {
  if (isMountedRef.current && navigationRef.current) {
    try {
      navigationRef.current.navigate(name, params);
    } catch (e) {
      return;
    }
  }
}
