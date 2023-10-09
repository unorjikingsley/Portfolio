import { createContext, useReducer } from 'react';

export const themeContext = createContext();

const initialState = { darkMode: false };

const themeReducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    <themeContext.Provider value={{ state, dispatch }}>{props.children}</themeContext.Provider>
  );
};
