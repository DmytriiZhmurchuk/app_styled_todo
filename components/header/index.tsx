import react, { FC } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  height: 60px;
  background: #000;
  padding: 0 20px;
`;

const HeaderNavigationContainer = styled.nav`
  color: #fff;
  display: flex;
  align-items: center;
  height: 100%;
`;

const MenuList = styled.ul`
  width: 100%;
  margin: 0;
  padding: 0;
`;

const MenuListItem = styled.li`
  display: inline-block;
  padding: 5px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: yellow;
    transform: scale(1.1);
    text-decoration: underline;
  }
`;

const AppHeader: FC = () => {
  return (
    <HeaderContainer>
      <HeaderNavigationContainer>
        <MenuList>
          <MenuListItem>Home</MenuListItem>
          <MenuListItem>Products</MenuListItem>
          <MenuListItem>Booking</MenuListItem>
          <MenuListItem>About</MenuListItem>
        </MenuList>
      </HeaderNavigationContainer>
    </HeaderContainer>
  );
};

export default AppHeader;
