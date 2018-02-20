import { put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import { USERS } from '../config';
import axios from 'axios';

// create user saga
function* createUser(action) {
  const { name, password, email } = action.user;
  try {
    const user = yield call(axios.post, USERS, {
      name,
      password,
      email,
    });
    yield put({
      type: 'USER:CREATE_SUCCESS',
      user: user.data,
    });
  } catch (e) {
    yield put({ type: 'USER:CREATE_FAIL', error: true });
  }
}

// fetch users from db
function* getUsers() {
  try {
    const users = yield call(axios.get, USERS);
    yield put({
      type: 'USERS:FETCH_SUCCESS',
      users: users.data,
      loading: false,
      error: false,
    });
  } catch (e) {
    yield put({
      type: 'USERS:FETCH_FAIL',
      error: true,
      loading: false,
    });
  }
}

// fetch one user from db
function* getUser(action) {
  try {
    const user = yield call(axios.get, `${USERS}/${action.id}`);
    yield put({
      type: 'USER:FETCH_SUCCESS',
      loading: false,
      error: false,
      data: user.data,
    });
  } catch (e) {
    yield put({
      type: 'USER:FETCH_FAIL',
      loading: false,
      error: e,
    });
  }
}

// edit user
function* editUser(action) {
  try {
    const user = yield call(axios.patch, `${USERS}/${action.id}`, {
      ...action.user,
    });
    yield put({
      type: 'USER:EDIT_SUCCESS',
      loading: false,
      error: false,
      data: user.data,
    });
  } catch (e) {
    yield put({
      type: 'USER:EDIT_FAIL',
      loading: false,
      error: e,
    });
  }
}

// listeners

export function* startCreateUser() {
  yield takeEvery('USER:CREATE', createUser);
}

export function* startGetUsers() {
  yield takeLatest('USERS:START_FETCH:ALL', getUsers);
}

export function* startGetUser() {
  yield takeLatest('USER:START_FETCH:ONE', getUser);
}

export function* startEditUser() {
  yield takeLatest('USER:EDIT', editUser);
}
