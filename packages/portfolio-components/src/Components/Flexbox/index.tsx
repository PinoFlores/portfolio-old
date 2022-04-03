import _ from "lodash";
import React from "react";
import { Color } from "../../theme/defaultTheme";

export type JustifyContentType =
  | "center"
  | "flex-end"
  | "flex-start"
  | "space-around"
  | "space-evenly"
  | "space-between";

export type AlignItemsType =
  | "center"
  | "stretch"
  | "baseline"
  | "flex-end"
  | "flex-start";

export type FlexWrapType = "nowrap" | "wrap" | "wrap-reverse";
export type FlexDireaction =
  | "row"
  | "unset"
  | "revert"
  | "column"
  | "inherit"
  | "initial"
  | "column-reverse"
  | "row-reverse";

export type BootstrapSpacingSystem = {
  m?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  p?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
};

interface FlexboxProps extends BootstrapSpacingSystem {
  bg?: Color;
  direction?: FlexDireaction;
  justifyContent?: JustifyContentType;
  alignItems?: AlignItemsType;
  flexWrap?: FlexWrapType;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
  noSpacing?: boolean;
  gap?: number;
}

export const Flexbox = (props: FlexboxProps) => {
  const { children, className } = props;

  const justifyContent = _.get(props, "justifyContent", "flex-start");
  const alignItems = _.get(props, "alignItems", "flex-start");
  const direction = _.get(props, "direction", "row");
  const flexWrap = _.get(props, "flexWrap", "wrap");
  const style = _.get(props, "style", {});
  const gap = _.get(props, "gap", {});

  return (
    <div
      style={{
        flexWrap,
        alignItems,
        justifyContent,
        gap: `${gap}rem`,
        display: "flex",
        flexDirection: direction,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};
