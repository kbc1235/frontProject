import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <NavItem>
          <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
          <Link to="/sample">spamplePage</Link>
        </NavItem>
        <NavItem>
          <Link to="/sub02">sub02</Link>
        </NavItem>
        <NavItem>
          <Link to="/sub03">sub03</Link>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
}

export const HeaderContainer = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  padding: 50px 20px;
  position: fixed;
  top: 0;
  left: 0;
  border-right: 1px solid #eef2ff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0 -20px;
`;

export const NavItem = styled.div`
  width: 100%;
  padding: 0 20px;
  & + & {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #a2a2a2;
  }
  & > a {
    display: block;
  }
`;
