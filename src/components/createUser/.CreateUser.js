import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser } from '../../actions/users';
import styled from 'styled-components';
import TitlePanel from '../../reusableComponents/TitlePanel';

// STYLES
const Wrapper = styled.div`
  padding: 25px;
`;
const FormWrapper = styled.div`
  background: #d3d3d3;
  max-width: 600px;
  padding: 25px 15px;
`;
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
const Button = styled.button`
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px;
  background: #383838;
  color: #f8f8f8;
`;

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
    };
  }
  handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({ [field]: value });
  };
  handleOnSubmit = () => {
    const { username, password, email } = this.state;
    if (username !== '' && password !== '' && email !== '') {
      this.props.createUser(username, password, email);
      this.setState({ username: '', password: '', email: '' });
    } else {
      alert('error');
    }
  };
  render() {
    return (
      <Wrapper>
        <TitlePanel
          title="Create User"
          subtitle="Please complete the following fields to create a new user"
        />
        <FormWrapper>
          <FieldWrapper>
            <Input
              onChange={this.handleOnChange}
              type="text"
              name="username"
              value={this.state.username}
              placeholder="username"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Input
              onChange={this.handleOnChange}
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Input
              onChange={this.handleOnChange}
              type="text"
              name="email"
              value={this.state.email}
              placeholder="email"
            />
          </FieldWrapper>
          <FieldWrapper>
            <Button onClick={this.handleOnSubmit}>Create User</Button>
          </FieldWrapper>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.Users,
});

const mapDispatchToProps = dispatch => ({
  createUser: (username, password, email) =>
    dispatch(createUser(username, password, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
