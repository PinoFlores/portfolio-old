import { useContext } from "react";
import { ThemeContext, ThemeContextProps } from "../theme/Provider";

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Wrap use Theme inside ThemeContext");
  return context;
};
