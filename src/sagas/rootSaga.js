import { all } from 'redux-saga/effects';
import {
  startCreateUser,
  startGetUsers,
  startGetUser,
  startEditUser,
  startDeleteUser,
} from './user';
import { startSignIn, startSignOut, startTokenSignIn } from './signIn';
import { startSeedingDB } from './admin';

export default function* rootSaga() {
  yield all([
    startCreateUser(),
    startGetUsers(),
    startGetUser(),
    startEditUser(),
    startDeleteUser(),
    startSignIn(),
    startSignOut(),
    startTokenSignIn(),
    startSeedingDB(),
  ]);
}
