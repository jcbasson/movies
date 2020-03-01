import styled from "styled-components";
import get from "lodash/get";

export const Layout = styled.div`
  border: 1px solid ${({ theme }) => get(theme, "colors.primary", "")};
  display: flex;
  justify-content: space-between;
  padding: 5px;
  height: 9%;
  cursor: pointer;
  outline: none !important;
  &:hover {
    background-color: ${({ theme }) => get(theme, "colors.secondary", "")};
  }
`;

export const LeftColumn = styled.div`
  display: flex;
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  width: 50px;
  justify-content: space-between;
`;

export const MovieTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  align-self: start;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MovieYear = styled.span`
  font-size: 16px;
  text-align: right;
`;

export const MovieStar = styled.img`
  width: 100%;
  height: 70%;

  @media (min-width: 426px) {
    height: 75%;
  }
`;
