import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../actions/signIn';

export const SignOutContainer = ({ signOut, history }) => {
  const startSignOut = () => {
    signOut();
    history.push('/');
  };
  return (
    <div>
      <h2>Would you like to sign out?</h2>

      <button onClick={startSignOut}>Sign Out</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignOutContainer);
