import {
  FETCH_PROFILE,
  FETCH_POSTS,
  FETCH_COMMENTS,
  HANDLE_POSTS_LIKE,
  HANDLE_COMMENTS_LIKE,
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

// function* updatePostsLike(action) {
//   const postDetails = yield select(selectPostDetails());
//   const posts = yield call(updatePostLike, action.id, postDetails.get('likes'));
//   console.log(posts);
// }

// function* updateCommentsLike(action) {
//   const { comments } = yield call(updateComments, action.id);
// }

function* handleAddComment(action) {
  const comment = yield call(addComments, action.id, action.value);

  yield put(finishAddingComment(comment));
}

export function* sagas() {
  yield takeEvery(FETCH_PROFILE, fetchProfile);
  yield takeEvery(FETCH_POSTS, fetchPosts);
  yield takeEvery(FETCH_COMMENTS, fetchComments);
  // yield takeEvery(HANDLE_POSTS_LIKE, updatePostsLike);
  // yield takeEvery(HANDLE_COMMENTS_LIKE, updateCommentsLike);
  yield takeEvery(HANDLE_ADD_COMMENT, handleAddComment);
};