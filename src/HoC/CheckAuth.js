import React, { Component } from 'react';
import { connect } from 'react-redux';

export default ComposedComponent => {
  class Auth extends Component {
    componentWillMount() {
      if (!this.props.signIn.auth) {
        this.props.history.push('/');
      }
    }
    render() {
      return <ComposedComponent {...this.props} />;
    }
  }
  const mapStateToProps = state => ({
    signIn: state.signIn,
  });

  return connect(mapStateToProps)(Auth);
};
