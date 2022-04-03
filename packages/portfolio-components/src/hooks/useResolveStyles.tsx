import _ from "lodash";
import React from "react";
import { StyleThemeCallback, Theme } from "../theme/defaultTheme";

export const useResolveStyles = (
  style?: React.CSSProperties | StyleThemeCallback,
  theme?: Theme
) => {
  if (!style) return {};
  if (_.isFunction(style)) return style(theme);
  return style;
};
