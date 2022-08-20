import { GlobalStyle } from "./style/globalstyle";
import Routes from "./routes";
import { useState } from "react";
import { ProviderTheme } from "./contexts/ContextTheme";

function App() {
  return (
    <ProviderTheme>
      <GlobalStyle />
      <Routes />
    </ProviderTheme>
  );
}

export default App;
