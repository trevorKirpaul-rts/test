import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './Header';

export class HeaderContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
    };
  }
  componentDidMount() {
    const { signIn } = this.props;
    if (signIn) {
      signIn.auth && this.setState({ auth: signIn.auth });
    }
  }
  componentWillReceiveProps(nextProps) {
    const signIn = nextProps.signIn;
    if (signIn.auth) {
      this.setState({ auth: signIn.auth });
    }
  }
  render() {
    return <Header auth={this.state.auth} />;
  }
}

const mapStateToProps = state => ({
  signIn: state.signIn,
});

export default connect(mapStateToProps)(HeaderContainer);
