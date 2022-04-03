import _ from "lodash";
import { getTheme, Theme } from "./defaultTheme";
import React, { createContext, useCallback, useEffect, useState } from "react";

export interface ThemeContextProps {
  theme: Theme;
  switchMode: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: getTheme("light"),
  switchMode: () => {},
});

interface ThemeProviderProps {
  mode: "light" | "dark";
  children: React.ReactNode;
}

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [mode, setMode] = useState<"light" | "dark">(
    _.get(props, "mode", "light")
  );
  const [theme, setTheme] = useState<Theme>(
    getTheme(_.get(props, "mode", "light"))
  );

  useEffect(() => {
    console.log(mode);

    const a = getTheme(mode);
    setTheme(a);
  }, [mode]);

  const switchMode = useCallback(
    () => setMode((p) => (p === "dark" ? "light" : "dark")),
    []
  );

  return (
    <ThemeContext.Provider value={{ theme, switchMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
