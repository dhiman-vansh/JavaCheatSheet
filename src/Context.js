import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const themeContext = createContext();

// const init = false;
const initialState = { darkMode: false };

const themeReducer = (state, action) => {

  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {

  const [state, dispatch] = useReducer(themeReducer, initialState);
  useEffect(() => {
    console.log("Mode is " + state.darkMode);
    window.localStorage.setItem("Mode", JSON.stringify(state.darkMode));
  }, [state]);

  return (
    <themeContext.Provider value={{ state, dispatch }}>{props.children}</themeContext.Provider>
  );
};