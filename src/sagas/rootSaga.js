import { all } from 'redux-saga/effects';
import { startCreateUser, startGetUsers, startGetUser } from './user';

export default function* rootSaga() {
  yield all([startCreateUser(), startGetUsers(), startGetUser()]);
}
