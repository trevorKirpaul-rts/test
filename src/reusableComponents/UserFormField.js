import React from 'react';
import styled from 'styled-components';

const FieldWrapper = styled.div`
  margin-bottom: 10px;
`;
const Input = styled.input`
  display: inline-block;
  padding: 5px 10px;
  background: white;
  border: none;
  color: #383838;
`;

export default ({ name, placeholder, type, onChange, value }) => {
  return (
    <FieldWrapper>
      <Input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={onChange}
        value={value}
      />
    </FieldWrapper>
  );
};
