import { createContext } from "react";
// Contexto padrão do styled-components, usado para compartilhar um tema pela aplicação
import { ThemeProvider } from "styled-components";

// Importando os temas
import LightTheme from "../theme/LightTheme";
import DarkTheme from "../theme/DarkTheme";
import usePersistedState from "../utils/hooks/usePersistedState";

export const ContextTheme = createContext();

export const ProviderTheme = ({ children }) => {
  // Armazenando o tema a uma variavel, e enviando ao custom hook
  const [theme, setTheme] = usePersistedState("theme", LightTheme);
  // Função responsável pela mudança de tema
  const toggleTheme = () => {
    // Armazenando a variavel theme se o tem é dark ou light
    setTheme(theme.name === "light" ? DarkTheme : LightTheme);
  };
  return (
    <ContextTheme.Provider value={{ toggleTheme }}>
      {/* Compartilhando o tema para os componentes filhos */}
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ContextTheme.Provider>
  );
};
