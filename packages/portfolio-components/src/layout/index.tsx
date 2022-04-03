import _ from "lodash";

import json2mq from "json2mq";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { ResizeObserver } from "@juggle/resize-observer";
import React, { createContext, useEffect, useMemo, useState } from "react";

export type Sizes = "xs" | "sm" | "md" | "lg" | "xl";
export interface BreakPointsContextProps {
  mediaQueries: string[];
  screen: Sizes | null;
}

export const BreakPointsContext = createContext<BreakPointsContextProps>(
  {} as BreakPointsContextProps
);

const BreakPoints = {
  xs: json2mq({
    maxWidth: 575.98,
  }),
  sm: json2mq({
    minWidth: 576,
    maxWidth: 767.98,
  }),
  md: json2mq({
    minWidth: 768,
    maxWidth: 991.98,
  }),
  lg: json2mq({
    minWidth: 992,
    maxWidth: 1199.98,
  }),
  xl: json2mq({
    minWidth: 1200,
  }),
};

export interface BreakPointsProviderProps {
  children: React.ReactNode;
}

export const BreakPointsProvider = ({ children }: BreakPointsProviderProps) => {
  const [screen, setScreen] = useState<Sizes | null>(null);
  const [mediaQueries, setMediaQueries] = useState<string[]>([]);
  const match = useMediaQuery();

  const [ref, bounds] = useMeasure({ scroll: true, polyfill: ResizeObserver });

  useEffect(() => {
    const qs = _.keys(BreakPoints).map(
      (key) => `@media ${_.get(BreakPoints, key, "xl")}`
    );
    setMediaQueries(qs);
  }, []);

  useEffect(() => {
    if (match(BreakPoints.xs)) setScreen("xs");
    else if (match(BreakPoints.sm)) setScreen("sm");
    else if (match(BreakPoints.md)) setScreen("md");
    else if (match(BreakPoints.lg)) setScreen("lg");
    else if (match(BreakPoints.xl)) setScreen("xl");
  }, [bounds]);

  const values = useMemo(() => {
    return {
      mediaQueries,
      screen,
    };
  }, [mediaQueries, screen]);

  return (
    <div ref={ref}>
      <BreakPointsContext.Provider value={values}>
        {children}
      </BreakPointsContext.Provider>
    </div>
  );
};
