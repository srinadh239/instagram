import { fromJS } from 'immutable';
import {
  FETCH_PROFILE_SUCCESS,
  FETCH_POSTS_SUCCESS,
  FETCH_COMMENTS_SUCCESS,
  HANDLE_POSTS_LIKE,
  HANDLE_COMMENTS_LIKE,
  HANDLE_ADD_COMMENT_SUCCESS,
} from '../constants';

const initialState = fromJS({
  profile: {},
  postData: {},
  commentList: [],
});

const initialReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROFILE_SUCCESS:
      return state.set('profile', fromJS(action.data));
    case FETCH_POSTS_SUCCESS:
      return state.set('postData', fromJS(action.data));
    case FETCH_COMMENTS_SUCCESS:
      return state.set('commentList', fromJS(action.data));
    case HANDLE_POSTS_LIKE: {
      let postData = state.get('postData');
      postData = postData.set('likes', (postData.get('likes') + 1));

      return state.set('postData', postData);
    };
    case HANDLE_COMMENTS_LIKE: {
      let comments = state.get('commentList');

      comments = comments.update(comments.findIndex((comment) => (comment.id === action.id)), (item) => item.set('likes', (item.get('likes') + 1)))

      return state.set('commentList', comments);
    };
    case HANDLE_ADD_COMMENT_SUCCESS: {
      let comment = fromJS(action.comment);
      comment = comment.set('profile', state.get('profile').delete('posts'));

      return state.set('commentList', state.get('commentList').push(comment));
    }
    default:
      return state;
  }
}

export default initialReducer;