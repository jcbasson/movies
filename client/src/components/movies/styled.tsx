import styled from "styled-components";
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

export const LeftColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  border-right: 1px solid ${({ theme }) => get(theme, "colors.primary", "")};
  padding: 10px;
  @media (min-width: 426px) {
    width: 33%;
  }
`;

export const RightColumn = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  height: 100%;
  width: 100%;
`;
