import { takeEvery, delay, put } from "redux-saga/effects";
import { login } from "./userSlice";

//worker saga
function* loginAsync(action: any) {
  yield delay(1000); // simulate API call
  yield put(login(action.payload));
}

//watcher saga
export function* watchUser() {
  yield takeEvery("loginAsync", loginAsync);
}