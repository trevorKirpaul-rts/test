import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions/signIn';

export class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  handleOnChange = e => {
    const field = e.target.name;
    const value = e.target.value;
    this.setState({ [field]: value });
  };
  handleSubmit = () => {
    const { email, password } = this.state;
    if (email !== '' && password !== '') {
      this.props.signIn({ email, password });
    }
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.auth) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <h2>Sign In</h2>
        <input
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleOnChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleOnChange}
        />
        <button onClick={this.handleSubmit}>Sign In</button>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.signIn,
});

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
