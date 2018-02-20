import React from 'react';
import styled from 'styled-components';
import TitlePanel from '../../reusableComponents/TitlePanel';

// STYLES
const Wrapper = styled.div`
  padding: 25px;
`;
const BodyPanel = styled.div`
  max-width: 600px;
`;
const Body = styled.p`
  line-height: 2em;
  margin-bottom: 25px;
`;

export default () => {
  return (
    <Wrapper>
      <TitlePanel title="Dev Env Test" subtitle="" />
      <BodyPanel>
        <Body>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea velit
          eius quas sint officia numquam hic ipsa quibusdam, delectus enim
          incidunt culpa corporis minima excepturi voluptate eum nisi expedita
          a?
        </Body>

        <Body>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, tenetur
          quasi! Illo nam expedita, sunt blanditiis optio soluta. Nisi magnam
          est sit facilis esse enim, dolorem sequi nostrum adipisci pariatur?
        </Body>
      </BodyPanel>
    </Wrapper>
  );
};
