import { put, takeEvery,takeLatest, call} from 'redux-saga/effects'
import { USERS } from '../config'
import axios from 'axios'

// create user saga
function* createUser(action) {
  const { name, password } = action.user;
  try {
    const user = yield call(axios.post, USERS, {
      name, password
    })
    yield put({
      type: 'USER:CREATE_SUCCESS',
      user: user.data
    })
  } catch (e) {
    yield put({ type: 'USER:CREATE_FAIL', error: true })
  }
}

// fetch users from db
function* getUsers() {
  try {
    const users = yield call(axios.get, USERS)
    yield put({
      type: 'USERS:FETCH_SUCCESS',
      users: users.data,
      loading: false,
      error: false,
    })
  } catch (e) {
    yield put({
      type: 'USERS:FETCH_FAIL',
      error: true,
      loading: false,
    })
  }
}

// listeners

export function* startCreateUser() {
  yield takeEvery('USER:CREATE', createUser)
}

export function* startGetUsers() {
  yield takeLatest('USERS:START_FETCH:ALL', getUsers)
}