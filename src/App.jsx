import { ThemeProvider } from "styled-components";
import "./GlobleStyle.js";
import { getTheme } from "./theme/theme";
import GlobalStyle from "./GlobleStyle.js";
import { useState } from "react";
import AppRoutes from "./Routes.jsx";

function App() {
  const [mode, setMode] = useState("dark");

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
