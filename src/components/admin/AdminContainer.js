import React, { Component } from 'react';
import { connect } from 'react-redux';
import { seed } from '../../actions/admin';

export class AdminContainer extends Component {
  handleSubmit = () => {
    this.props.seed();
  };
  render() {
    return (
      <div>
        <h2>ADMIN</h2>
        <button onClick={this.handleSubmit}>Create Seed Data</button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  seed: () => dispatch(seed()),
});

export default connect(null, mapDispatchToProps)(AdminContainer);
