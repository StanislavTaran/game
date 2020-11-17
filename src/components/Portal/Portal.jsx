import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const StyledPortal = styled.div`
  display: flex;
  justify-content: center;
  background-color: #ffe4c4a6;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

function Portal({ children }) {
  return createPortal(<StyledPortal>{children}</StyledPortal>, document.getElementById('modal'));
}

export default Portal;
