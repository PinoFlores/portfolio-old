import _ from "lodash";
import { ClassThemeCallback, Theme } from "../theme/defaultTheme";

export const useResolveClass = (
  className?: string | ClassThemeCallback,
  theme?: Theme
) => {
  if (!className) return "";
  if (_.isFunction(className)) return className(theme);
  return className;
};
