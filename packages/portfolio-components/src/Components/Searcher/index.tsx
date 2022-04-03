import React from "react";
import styled from "@emotion/styled";
import { IoSearch } from "react-icons/io5";
import { Theme } from "../../theme/defaultTheme";
import { withTheme } from "../../middlewares";

interface SearcherProps {
  theme?: Theme;
}

export const Searcher = withTheme(({ theme }: SearcherProps) => {
  return (
    <SearcherContainer theme={theme}>
      <IoSearch />
      <Input type="text" placeholder="Search" theme={theme} />
    </SearcherContainer>
  );
});

const SearcherContainer = styled.div<{ theme?: Theme }>`
  width: fit-content;
  border-radius: 4rem;
  display: flex;
  padding: 0rem 0.4rem;
  align-items: center;
  background-color: ${(props) => props.theme.palette.background.default};
  color: #9ba5a5;
  & > svg {
    font-size: 1rem;
    padding: 0.5rem;
    color: #9ba5a5;
  }
  &:focus-within {
    & > svg {
      color: #fff;
    }
  }
`;

const Input = styled.input<{ theme?: Theme }>`
  color: #9ba5a5;
  font-size: 1rem;
  padding: 0.5rem 0;
  border: none;
  background-color: transparent;
  &:focus {
    outline: none;
    color: #fff;
  }
`;
