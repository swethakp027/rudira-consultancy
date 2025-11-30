import { takeEvery, put, delay } from "redux-saga/effects";
import { increment } from "./counterSlice";

// worker saga
function* incrementAsync() {
  yield delay(1000);
  yield put(increment());
}

//watcher saga
export function* watchCounter() {
  yield takeEvery("incrementAsync", incrementAsync);
}