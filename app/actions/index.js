import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_POSTS,
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS,
  FETCH_COMMENTS_SUCCESS,
  HANDLE_POSTS_LIKE,
  HANDLE_COMMENTS_LIKE,
  HANDLE_ADD_COMMENT,
  HANDLE_ADD_COMMENT_SUCCESS,
} from '../constants';

export const fetchProfileDetails = () => {
  return {
    type: FETCH_PROFILE,
  };
}

export const finishLoadingProfileDetails = (data) => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    data,
  };
}

export const fetchPostDetails = (id) => {
  return {
    type: FETCH_POSTS,
    id,
  };
}

export const finishLoadingPosts = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    data,
  };
}

export const fetchComments = (id) => {
  return {
    type: FETCH_COMMENTS,
    id,
  };
}

export const finishLoadingComments = (data) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    data,
  };
}

export const handlePostLike = (id) => {
  return {
    type: HANDLE_POSTS_LIKE,
    id,
  };
}

export const handleCommentLike = (id) => {
  return {
    type: HANDLE_COMMENTS_LIKE,
    id,
  };
}

export const handleAddComment = (id, value) => {
  return {
    type: HANDLE_ADD_COMMENT,
    id,
    value,
  };
}

export const finishAddingComment = (comment) => {
  return {
    type: HANDLE_ADD_COMMENT_SUCCESS,
    comment,
  }
}
