import "react-app-polyfill/ie11";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { ThemeProvider, Thing, useTheme } from "../.";

const App2 = () => {
  const { switchMode, theme } = useTheme();

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

ReactDOM.render(<App />, document.getElementById("root"));
