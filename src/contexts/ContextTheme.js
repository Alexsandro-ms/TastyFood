import { createContext } from "react";
import { ThemeProvider } from "styled-components";

import LightTheme from "../theme/LightTheme";
import DarkTheme from "../theme/DarkTheme";
import usePersistedState from "../utils/hooks/usePersistedState";

export const ContextTheme = createContext();

export const ProviderTheme = ({ children }) => {
  const [theme, setTheme] = usePersistedState("theme", LightTheme);
  const toggleTheme = () => {
    setTheme(theme.name === "light" ? DarkTheme : LightTheme);
  };
  return (
    <ContextTheme.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextTheme.Provider>
  );
};
