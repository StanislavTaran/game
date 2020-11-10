import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  background-color: tomato;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTitleLogo = styled.h1`
  text-align: center;
  margin: 0;
  color: #751f6b;
  font-style: italic;
`;

const Header = () => {
  return <StyledHeader>
      <StyledTitleLogo>Catch the Square</StyledTitleLogo>
  </StyledHeader>;
};

export default Header;
