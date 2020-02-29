import React from "react";
import styled from "styled-components";
import Navigation from "../../navigation";

const LayoutHeaderMain = ({ children }) => {
  return (
    <Layout>
      <LayoutHeaderPlaceholder>
        <Navigation></Navigation>
      </LayoutHeaderPlaceholder>
      <LayoutMainContentPlaceHolder>{children}</LayoutMainContentPlaceHolder>
    </Layout>
  );
};

const Layout = styled.div`
  * {
    font-family: ${({ theme }) => theme.fonts.primary} !important;
  }
  background-color: ${({ theme }) => theme.colors.background};
  height: auto;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LayoutHeaderPlaceholder = styled.header`
  width: 100%;
  height: 70px;
  padding: 5px;
`;

const LayoutMainContentPlaceHolder = styled.main`
  width: 81%;
  height: auto;
  display: flex;
  flex-direction: column;
`;

export default LayoutHeaderMain;
