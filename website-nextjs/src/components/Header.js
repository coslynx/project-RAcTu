import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Logo</Logo>
      <Nav>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Contact</NavItem>
        <NavItem>Dashboard</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: #fff;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Nav = styled.nav`
  display: flex;
`;

const NavItem = styled.a`
  color: #fff;
  text-decoration: none;
  margin-left: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default Header;