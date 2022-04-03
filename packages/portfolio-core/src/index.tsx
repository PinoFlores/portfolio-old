import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { ThemeProvider, Thing, useTheme } from "portfolio-components";

const App2 = () => {
  const { switchMode, theme } = useTheme();

  console.log(theme.palette.mode);

  return (
    <div
      style={{
        background: theme.palette.background.default,
        borderRadius: "6px",
      }}
    >
      <Thing />
      <button onClick={() => switchMode()}>{theme.palette.mode}</button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider mode="dark">
      <App2 />
    </ThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("app-root"));
