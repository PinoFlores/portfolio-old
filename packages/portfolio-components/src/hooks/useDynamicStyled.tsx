import _ from "lodash";
import { css } from "@emotion/css";
import {
  Theme,
  ClassThemeCallback,
  StyleThemeCallback,
} from "../theme/defaultTheme";
import { useResolveClass } from "./useResolveClass";
import { useResolveStyles } from "./useResolveStyles";

interface Props {
  theme?: Theme;
  className?: string | ClassThemeCallback;
  style?: React.CSSProperties | StyleThemeCallback;
}

export const useDynamicStyled = ({ theme, ...props }: Props) => {
  const classes = useResolveClass(_.get(props, "className"), theme);
  const _style = useResolveStyles(_.get(props, "style"), theme);

  return {
    className: css`
      ${classes}
    `,
    style: _style,
  };
};
