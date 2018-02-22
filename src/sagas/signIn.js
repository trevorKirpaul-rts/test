import { put, takeLatest, call } from 'redux-saga/effects';
import { SIGN_IN } from '../config';
import axios from 'axios';

function* signIn(action) {
  const { email, password } = action.creds;
  try {
    const signIn = yield call(axios.post, SIGN_IN, {
      email,
      password,
    });
    yield put({
      type: 'SIGN-IN:SUCCESS',
      user: signIn.data.user,
      auth: signIn.data.signIn,
      loading: false,
      error: false,
    });
  } catch (e) {
    yield put({
      type: 'SIGN-IN:FAIL',
      auth: false,
      user: false,
      loading: false,
      error: false,
    });
  }
}

// listeners

export function* startSignIn() {
  yield takeLatest('SIGN-IN:START', signIn);
}
