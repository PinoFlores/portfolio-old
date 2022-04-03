import React from "react";
import { useTheme } from "../hooks/useTheme";

export function withTheme<T>(Component: React.FunctionComponent<T>) {
  return (props: T) => {
    const { theme } = useTheme();
    return <Component {...props} theme={{ ...theme }} />;
  };
}
