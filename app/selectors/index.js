import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

const selectProfileState = () => (state) => state.profile;

const selectProps = () => (_, props) => props;

const selectQueryProps = () => createSelector(
  selectProps(),
  (props) => qs.parse(props.location.search.substring(1))
);

const selectProfileDetails = () => (state) => state.profile.get('profile');

const selectPostDetails = () => (state) => state.profile.get('postData');

const selectPostComments = () => (state) => state.profile.get('commentList');

// const selectPostComments = () => createSelector(
//   selectPostDetails(),
//   (post) => post.get('comments', fromJS([]))
// );

export {
  selectProfileDetails,
  selectPostDetails,
  selectPostComments,
};
