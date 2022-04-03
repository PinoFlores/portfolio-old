import React from "react";
import styled from "@emotion/styled";
import { withTheme } from "../../middlewares";
import { Theme } from "../../theme/defaultTheme";
import { Text } from "../Text";

export interface NavbarItems {
  label: string;
  Icon?: React.FunctionComponent;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
}

interface TabProps {
  bordered?: boolean;
  items: NavbarItems[];
  theme?: Theme;
}

export const Tab = withTheme((props: TabProps) => {
  return (
    <TabsContainer {...props}>
      {props.items.map((item: NavbarItems, index: number) => {
        const { label, onClick } = item;
        return (
          <TabItemButton key={index} onClick={onClick} theme={props?.theme}>
            {/* {Icon ? <Icon /> : null} */}
            <Text color="text.disabled">{label}</Text>
          </TabItemButton>
        );
      })}
    </TabsContainer>
  );
});

interface TabsContainerProps {
  bordered?: boolean;
  theme?: Theme;
}

const TabsContainer = styled.div<TabsContainerProps>`
  padding: 0 1rem;
  display: flex;
  align-items: center;
  border-radius: 6px;
  background: ${(props) => props.theme.palette.background.paper};
  width: fit-content;
`;

const TabItemButton = styled.button<{ theme?: Theme }>`
  border: none;
  display: flex;
  font-size: 14px;
  cursor: pointer;

  align-items: center;
  background: transparent;
  padding: 1rem 1.2rem;
  color: ${(props) => props.theme.palette.text.disabled};
  border-bottom: 2px solid ${(props) =>
    props.theme.palette.background.paper}; !important;
  & > svg {
    font-size: 16px;
    color: ${(props) => props.theme.palette.text.disabled};
    margin-right: 0.4rem;
  }
  &:focus  {
    & p {
      color: ${(props) => props.theme.palette.text.primary} !important;

    }
    border-bottom: 2px solid #008fff !important;
  }
`;
