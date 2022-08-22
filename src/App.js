import { ProviderTheme } from "./contexts/ContextTheme";
import { GlobalStyle } from "./style/globalstyle";
import Routes from "./routes";

function App() {
  return (
    // Provendo o Tema ao estilo e a aplicação
    <ProviderTheme>
      <GlobalStyle />
      <Routes />
    </ProviderTheme>
  );
}

export default App;
