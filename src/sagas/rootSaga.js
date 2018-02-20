import { all } from 'redux-saga/effects'
import { startCreateUser, startGetUsers } from './user'

export default function* rootSaga() {
  yield all([
    startCreateUser(),
    startGetUsers()
  ])
}