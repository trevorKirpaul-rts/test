import { all } from 'redux-saga/effects';
import {
  startCreateUser,
  startGetUsers,
  startGetUser,
  startEditUser,
} from './user';

export default function* rootSaga() {
  yield all([
    startCreateUser(),
    startGetUsers(),
    startGetUser(),
    startEditUser(),
  ]);
}
