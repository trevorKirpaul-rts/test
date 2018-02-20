import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* padding: 25px; */
  margin-bottom: 35px;
`;
const Title = styled.h1`
  font-weight: 300;
  color: #383838;
  margin: 5px 0 15px 0;
`;
const SubTitle = styled.h3`
  font-weight: 500;
  font-size: 1.5em;
  color: palevioletred;
  margin: 5px 0 15px 0;
`;

export default ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Wrapper>
  );
};
