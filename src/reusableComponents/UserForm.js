import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createUser, patchUser, getUser } from '../actions/users';
import TitlePanel from '../reusableComponents/TitlePanel';
import UserFormField from './UserFormField';
import styled from 'styled-components';

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
const Button = styled.button`
  border-radius: 5px;
  display: inline-block;
  padding: 5px 10px;
  background: #383838;
  color: #f8f8f8;

  &:hover {
    cursor: pointer;
  }
`;

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      id: '',
      error: false,
      method: '',
    };
  }
  handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;

    this.setState({ [field]: value });
  };
  handleOnSubmit = () => {
    const { username, password, email, firstName, lastName } = this.state;
    // check if any fields are blank
    const formComplete = () => {
      const fields = [username, password, firstName, lastName];
      fields.forEach(field => {
        if (field === '') {
          return false;
        }
      });
      return true;
    };

    // check if this component was called from create or patch HoC
    const { method } = this.props;

    // check if form fields are filled
    // also check if creating or patching user
    if (formComplete() === true && method === 'create') {
      this.handleCreateUser({ firstName, lastName, email, password });
      // this.props.history.push('/users');
    } else if (formComplete === true && method === 'patch') {
      this.handlePatchUser({ name: username, email, password });
      this.props.history.push('/users');
    } else {
    }
  };
  handleCreateUser = fields => {
    this.props.createUser(fields);
    this.setState({
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      error: false,
    });
  };
  handlePatchUser = fields => {
    const id = this.state.id;
    this.props.patchUser({ ...fields, id });
    this.setState({
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      error: false,
    });
  };
  componentDidMount() {
    if (this.props.method === 'create') {
      this.setState({ method: 'create' });
    } else {
      const id = this.props.match.params.id;
      this.props.getUser(id);
      this.setState({ method: 'patch' });
    }
  }
  componentWillReceiveProps(nextProps) {
    const users = nextProps.users;
    if (users.singleUser) {
      const { name: username, password, email, id } = users.singleUser;
      this.setState({ username, password, email, id });
    }
  }
  render() {
    const { title, subtitle } = this.props;
    const { username, password, email, firstName, lastName } = this.state;
    return (
      <Wrapper>
        <TitlePanel title={title} subtitle={subtitle} />
        <FormWrapper>
          <UserFormField
            autofocus={true}
            type="text"
            onChange={this.handleOnChange}
            name="username"
            value={username}
            placeholder="username"
          />
          <UserFormField
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={this.handleOnChange}
          />
          <UserFormField
            type="text"
            name="firstName"
            placeholder="first name"
            value={firstName}
            onChange={this.handleOnChange}
          />
          <UserFormField
            type="text"
            name="lastName"
            placeholder="lastName"
            value={lastName}
            onChange={this.handleOnChange}
          />
          <UserFormField
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={this.handleOnChange}
          />
          <FieldWrapper>
            <Button onClick={this.handleOnSubmit}>Submit Changes</Button>
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
  // field passed in as object {username, password, email}
  createUser: fields => dispatch(createUser(fields)),
  patchUser: fields => dispatch(patchUser(fields)),
  getUser: id => dispatch(getUser(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
