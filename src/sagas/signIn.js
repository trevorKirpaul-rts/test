import { put, takeLatest, call } from 'redux-saga/effects';
import { SIGN_IN, TOKEN } from '../config';
import axios from 'axios';

function* signIn(action) {
  const { email, password } = action.creds;
  try {
    const signIn = yield call(axios.post, SIGN_IN, {
      email,
      password,
    });
    localStorage.setItem('token', signIn.data.token);
    yield put({
      type: 'SIGN-IN:SUCCESS',
      auth: signIn.data.signIn,
      token: signIn.data.token,
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

function* signOut() {
  localStorage.removeItem('token');
  yield put({
    type: 'SIGN-OUT:SUCCESS',
    auth: false,
    user: false,
    loading: false,
    error: false,
  });
}

function* tokenSignIn(action) {
  const token = action.token;
  try {
    const signIn = yield call(axios.post, TOKEN, { token });
    yield put({
      type: 'SIGN-IN:SUCCESS',
      token: signIn.data.token,
      loading: false,
      error: false,
      auth: true,
    });
  } catch (e) {
    yield put({
      type: 'SIGN-IN:FAIL',
      error: signIn.data.error,
      auth: false,
      user: false,
      loading: false,
    });
  }
}

// listeners

export function* startSignIn() {
  yield takeLatest('SIGN-IN:START', signIn);
}

export function* startSignOut() {
  yield takeLatest('SIGN-OUT:START', signOut);
}

export function* startTokenSignIn() {
  yield takeLatest('SIGN-IN:TOKEN_START', tokenSignIn);
}
