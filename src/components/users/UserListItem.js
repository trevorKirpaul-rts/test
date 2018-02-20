import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.li`
  background: #D3D3D3;
  margin: 10px 15px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
`

const FieldWrapper = styled.div`

`
const ActionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h3`
  font-weight: 500;
`

const Body = styled.h3`
  font-weight: 400;
`

const Button = styled.button`
  border-radius: 10px;
  display: inline-block;
  padding: 5px 10px;
  background: ${props => {
    if (props.danger) {
      return "#FB4D3D"
    } else if (props.warning) {
      return "#EAC435"
    } else if (props.primary) {
      return "#345995"
    } else {
      return "#383838"
    }
  } };
  color: ${props => props.warning ? "#383838" : "#f8f8f8"};
  &:hover {
    cursor: pointer;
  }
`


export default ({name, password}) => {
  return (
    <Wrapper>
      <FieldWrapper>
        <Title>Name: {name}</Title>
        <Body>Password{password}</Body>
      </FieldWrapper>
      <ActionWrapper>
        <Button warning>Edit</Button>
        <Button primary>View</Button>
        <Button danger>Delete</Button>
      </ActionWrapper>
    </Wrapper>
  )
}
