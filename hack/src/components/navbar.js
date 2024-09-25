import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <Logo href="/">RecycleIt</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/">Main</NavLink>
        <NavLink href="/login">Login</NavLink>
        <GetStarted href="/get-started">Get Started</GetStarted>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: transparent;
`;

const Logo = styled.a`
  font-size: 24px;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: grey;
`;

const GetStarted = styled.a`
  padding: 10px 20px;
  background-color: #00b7d3;
  color: white;
  text-decoration: none;
  border-radius: 5px;
`;
