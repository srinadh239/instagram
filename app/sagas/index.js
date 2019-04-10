import {
  FETCH_PROFILE,
  FETCH_POSTS,
  FETCH_COMMENTS,
  HANDLE_ADD_COMMENT,
} from '../constants';
import { takeEvery, put, call, select } from 'redux-saga/effects';
import { finishLoadingProfileDetails, finishLoadingPosts, finishLoadingComments, finishAddingComment } from '../actions';
import { getProfileDetails, getPostDetails, getComments, addComments } from '../services';
import { selectPostDetails } from '../selectors';

function* fetchProfile() {
  const profile = yield call(getProfileDetails);

  yield put(finishLoadingProfileDetails(profile[0]));
}

function* fetchPosts(action) {
  const posts = yield call(getPostDetails, action.id);

  yield put(finishLoadingPosts(posts[0]));
}

function* fetchComments(action) {
  const comments = yield call(getComments, action.id);

  yield put(finishLoadingComments(comments));
}

function* handleAddComment(action) {
  const comment = yield call(addComments, action.id, action.value);

  yield put(finishAddingComment(comment));
}

export function* sagas() {
  yield takeEvery(FETCH_PROFILE, fetchProfile);
  yield takeEvery(FETCH_POSTS, fetchPosts);
  yield takeEvery(FETCH_COMMENTS, fetchComments);
  yield takeEvery(HANDLE_ADD_COMMENT, handleAddComment);
};