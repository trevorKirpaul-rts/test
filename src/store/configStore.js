// import React from 'react'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from '../sagas/rootSaga'
import Users from '../reducers/users'
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const store = createStore(
    combineReducers({
      Users
    }),
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )
  sagaMiddleware.run(saga)
  return store
}
