import React, { FC } from "react";
import styled from "styled-components";
import Header from "../components/header";

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 20px;
  color: fff;
  height: 100%;
`;

const MainLayout: FC = ({ children }) => {
  return (
    <>
      <Header></Header>
      <MainContainer>{children}</MainContainer>
    </>
  );
};

export default MainLayout;
