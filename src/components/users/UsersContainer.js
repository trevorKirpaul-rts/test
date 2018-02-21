import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUsers, deleteUser, resetDeleteCheck } from '../../actions/users';
import TitlePanel from '../../reusableComponents/TitlePanel';
import UsersList from './UsersList';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 25px;
`;

export class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      // modal
      open: false,
      id: '',
    };
  }
  // modal
  handleOpenModal = id => this.setState({ open: true, id });
  handleCloseModal = () => this.setState({ open: false });
  handleDeleteUser = () => {
    const id = this.state.id;
    // delete from database
    this.props.deleteUser(id);
    // update local state
    this.setState(() => ({
      open: false,
      id: '',
    }));
  };
  componentDidMount() {
    this.props.getUsers();
  }
  componentWillReceiveProps(nextProps) {
    const users = nextProps.users;
    if (users.all) {
      console.log(users.all);
      this.setState(() => ({
        users: users.all,
      }));
    }

    /*
      check if we succesfully deleted user via store then re-fetch all users
      This is a temp fix since I couldn't use setState to change local state
      in `handleDeleteUser`
    */
    if (users.deletedUser === 204) {
      this.props.resetDeleteCheck();
      this.props.getUsers();
    }
  }
  render() {
    const { users, open } = this.state;
    return (
      <Wrapper>
        <TitlePanel
          title="Users Collection"
          subtitle="A complete list of all users"
        />
        <UsersList
          users={users}
          open={open}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          handleDeleteUser={this.handleDeleteUser}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = state => ({
  users: state.Users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  deleteUser: id => dispatch(deleteUser(id)),
  resetDeleteCheck: () => dispatch(resetDeleteCheck()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
