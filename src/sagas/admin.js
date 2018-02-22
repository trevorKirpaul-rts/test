import { put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { SEED } from '../config';
import data from '../seed.json';

// seed data
function* seedDatabase() {
  try {
    const seed = yield call(axios.post, SEED, { data });
    yield put({
      type: 'ADMIN:SEED_SUCCESS',
      loading: false,
      error: false,
      message: seed.data.message,
    });
  } catch (e) {
    yield put({
      type: 'ADMIN:SEED_FAIL',
      loading: false,
      error: true,
    });
  }
}

// listener
export function* startSeedingDB() {
  yield takeLatest('ADMIN:START_SEED', seedDatabase);
}
