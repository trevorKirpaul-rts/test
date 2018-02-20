import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// STYLES
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
const LogoWrapper = styled.div`
  padding: 25px;
`;
const Logo = styled.h3`
  border-bottom: 2px solid palevioletred;
  display: inline-block;
  font-weight: 300;
  letter-spacing: 3px;
  padding-bottom: 5px;
`;
const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 25px;
`;
const StyledLink = styled(Link)`
  display: inline-block;
  background: #383838;
  border-radius: 5px;
  color: #f8f8f8;
  margin: 0 5px;
  padding: 5px 10px;
  text-decoration: none;
`;

export default () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <Logo>Trevor Kirpaul</Logo>
      </LogoWrapper>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/createUser">Create User</StyledLink>
        <StyledLink to="/users">Users</StyledLink>
      </Nav>
    </Wrapper>
  );
};
