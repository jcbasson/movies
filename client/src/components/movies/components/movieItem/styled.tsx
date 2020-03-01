import styled from "styled-components";
import get from "lodash/get";

export const Layout = styled.div`
  border: 1px solid ${({ theme }) => get(theme, "colors.primary", "")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  height: 80px;
  cursor: pointer;
  outline: none !important;
  &:hover {
    background-color: ${({ theme }) => get(theme, "colors.secondary", "")};
  }
`;

export const LayoutHeader = styled.div`
  width: 100%;
  display: flex;
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
  width: 10%;
  height: 100%;
`;
