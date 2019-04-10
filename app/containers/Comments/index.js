import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Map, List } from 'immutable';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Icon from '../../components/Icon';
import CommentHeader from '../../components/Comments/header';
import CommentList from '../../components/Comments';
import CommentInput from '../../components/Comments/input';
import { selectPostComments, selectProfileDetails } from '../../selectors';
import { fetchComments, handleCommentLike, handleAddComment } from '../../actions';

class Comments extends React.PureComponent{
  static propTypes = {
    comments: PropTypes.instanceOf(List),
    profile: PropTypes.instanceOf(Map),
    fetchComments: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchComments(this.props.match.params.id);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { comments, profile } = this.props;

    return (
      <div>
        <CommentHeader goback={this.handleGoBack} />
        <CommentList
          list={comments}
          handleCommentLike={this.props.handleCommentLike}
        />
        <CommentInput
          avatar={profile.get('avatar')}
          postId={this.props.match.params.id}
          handleAddComment={this.props.handleAddComment}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  comments: selectPostComments(),
  profile: selectProfileDetails(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchComments,
  handleCommentLike,
  handleAddComment,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);
