import { useState } from "react";
import "./App.css";
import LandingPage from "./componentes/landigPage/LandingPage";
import { ThemeProvider } from "@emotion/react";
import theme from "./temaConfig";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
