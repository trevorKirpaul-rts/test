import { all } from 'redux-saga/effects';
import {
  startCreateUser,
  startGetUsers,
  startGetUser,
  startEditUser,
  startDeleteUser,
} from './user';

export default function* rootSaga() {
  yield all([
    startCreateUser(),
    startGetUsers(),
    startGetUser(),
    startEditUser(),
    startDeleteUser(),
  ]);
}
