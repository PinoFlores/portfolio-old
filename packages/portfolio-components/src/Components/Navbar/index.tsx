import React from "react";
import styled from "@emotion/styled";
import { Searcher } from "../Searcher";
import { NavbarItems, Tab } from "../Tab";
import { withTheme } from "../../middlewares";
import { Theme } from "../../theme/defaultTheme";
import { Text } from "../Text";
import { Flexbox } from "../Flexbox";

interface NavbarProps {
  Logo?: React.ComponentClass;
  items: NavbarItems[];
  theme?: Theme;
  onSearch?: (text: string) => void;
}

export const Navbar = withTheme((props: NavbarProps) => {
  return (
    <Container theme={props?.theme}>
      <Flexbox alignItems="center" style={{ padding: "0 1rem" }}>
        <Text variant="h6" color="common.white" style={{ marginRight: "1rem" }}>
          Application
        </Text>
        <Tab items={props.items} />
      </Flexbox>
      <Flexbox alignItems="center" style={{ padding: "0 1rem" }}>
        <Searcher />
        <Tab items={props.items.slice(0, 2)} />
      </Flexbox>
    </Container>
  );
});

const Container = styled.div<{ theme?: Theme }>`
  display: flex;

  align-items: center;
  justify-content: space-between;
  font-family: "Roboto", sans-serif;
  color: ${(props) => props.theme.palette.text.primary};
  background: ${(props) => props.theme.palette.background.paper};
`;
