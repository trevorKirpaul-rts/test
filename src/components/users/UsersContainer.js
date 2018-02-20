import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/users'
import TitlePanel from '../../reusableComponents/TitlePanel'
import UsersList from './UsersList'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 25px;
`

export class UsersContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.props.getUsers()
  }
  componentWillReceiveProps(nextProps) {
    const users = nextProps.users
    if (users.all) {
      this.setState({ users: users.all })
    }
  }
  render() {
    return (
      <Wrapper>
        <TitlePanel title="Users Collection" subtitle="A complete list of all users" />
        <UsersList users={this.state.users} />
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({
  users: state.Users
})

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
})

export default connect(mapStateToProps,mapDispatchToProps)(UsersContainer)