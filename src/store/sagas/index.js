import { all, takeLatest, takeEvery } from "redux-saga/effects";
import * as Actions from "store/actions";
import { fetchWordpressContent } from "store/sagas/wordpressSaga";

function* rootSaga() {
  yield all([
    takeLatest(Actions.FETCH_WORDPRESS_CONTENT_START, fetchWordpressContent)
  ]);
}

export default rootSaga;
