import React from "react";
import styled from "@emotion/styled";
import { Theme } from "../../theme/defaultTheme";
import { withTheme } from "../../middlewares";

interface CardProps {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  theme?: Theme;
}

export const Card = withTheme(({ children, theme, ...props }: CardProps) => {
  return (
    <CardContainer theme={theme} {...props}>
      {children ? children : null}
    </CardContainer>
  );
});

const CardContainer = styled.div<{ theme?: Theme }>`
  padding: 2rem;
  color: #9ba5a5;
  border-radius: 6px;
  background-color: ${(props) => props.theme.palette.background.paper || ""};
`;
