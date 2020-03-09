import React, { useReducer, createContext } from "react";

export default function(reducer, actions, init) {
  const Context = createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, init);
    let boundActions = {};
    for (let action in actions) {
      boundActions[action] = actions[action](dispatch);
    }
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
}
