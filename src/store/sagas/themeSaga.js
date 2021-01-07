import { call, delay, put, select } from "redux-saga/effects";
import axios from "axios";
import * as Actions from "../actions/action-types/theme-actions";

const WORDPRESS_URL = "https://vijnana.ideastime.ltd"; // process.env.REACT_APP_WORDPRESS_URL

export function* submitForm() {
  const state = yield select();
  const { form } = state.theme;
  console.log('form--', form)
  try {
    const response = yield call(() => axios.get(`${WORDPRESS_URL}/wp-json/wp/v2/posts`));

    if (response.statusText === "OK") {
      yield put({
        type: Actions.SUBMIT_FORM_SUCCESS,
        data: response.data
      });
    } else {
      yield put({ type: Actions.SUBMIT_FORM_FAIL });
    }
  } catch (e) {
    yield put({ type: Actions.SUBMIT_FORM_FAIL });
  }
}
