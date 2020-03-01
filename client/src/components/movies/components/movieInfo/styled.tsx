import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  padding: 20px;
  width: 100%;
`;

export const LeftColumn = styled.div`
  width: 100%;
  @media (min-width: 426px) {
    width: 55%;
  }
  padding-right: 20px;
  border-right: 1px solid black;
`;

export const RightColumn = styled.div`
  width: 100%;
  @media (min-width: 426px) {
    width: 45%;
  }
`;
