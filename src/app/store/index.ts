import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { watchCounter } from "./features/counter/counterSaga";
import { watchUser } from "./features/user/userSaga";
import { all, fork } from "redux-saga/effects";
import counterReducer from "./features/counter/counterSlice"
import userReducer from "./features/user/userSlice"

// Combine reducers
const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

// Combine sagas
function* rootSaga() {
  yield all([fork(watchCounter), fork(watchUser)]);
}

// Saga middleware
const sagaMiddleware = createSagaMiddleware();


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);
