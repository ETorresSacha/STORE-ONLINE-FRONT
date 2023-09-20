import { useState } from "react";

import "./App.css";
import LandingPage from "./components/landingPage/Landing";
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
