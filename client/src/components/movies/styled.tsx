import styled, { css } from "styled-components";
import get from "lodash/get";

export const Layout = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  border: 1px solid ${({ theme }) => get(theme, "colors.primary", "")};
  background-color: ${({ theme }) => get(theme, "colors.background", "")};
  * {
    color: ${({ theme }) => get(theme, "colors.primary", "")};
    font-style: ${({ theme }) => get(theme, "fonts.primary", "")};
  }
`;

export const LeftColumn = styled.div<{ hasMovieSelected: boolean }>`
  height: 100%;
  border-right: 1px solid ${({ theme }) => get(theme, "colors.primary", "")};
  padding: 10px;
  @media (min-width: 426px) {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  ${({ hasMovieSelected }) =>
    hasMovieSelected
      ? css`
          display: none;
        `
      : css`
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 100%;
        `}
`;

export const RightColumn = styled.div<{ hasMovieSelected: boolean }>`
  height: 100%;
  ${({ hasMovieSelected }) =>
    hasMovieSelected
      ? css`
          width: 100%;
        `
      : css`
          display: none;
        `}
  @media (min-width: 426px) {
    width: 67%;
  }
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;
