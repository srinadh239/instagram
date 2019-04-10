import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class CommentInput extends React.PureComponent{
  static propTypes = {
    avatar: PropTypes.string,
    handleAddComment: PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.state = {
      comment: '',
    }
  }

  handleChange = (e) => {
    this.setState({ comment: e.target.value });
  }

  handleComment = () => {
    this.props.handleAddComment(this.props.postId, this.state.comment);
    this.setState({ comment: '' });
  }

  render() {
    return (
      <div className="row no-gutters footer-wrapper">
        <div className="col-2">
          <img
            alt="post"
            className="comment-add-image"
            src={this.props.avatar}
          />
        </div>
        <div className="col-8">
          <input
            autoFocus
            onChange={this.handleChange}
            value={this.state.comment}
            className="comment-input"
            placeholder="Add a comment ..."
          />
        </div>
        <div className="col-2">
          <a className="post-comment" onClick={this.handleComment}>Post</a>
        </div>
      </div>
    );
  }
}

export default CommentInput;
