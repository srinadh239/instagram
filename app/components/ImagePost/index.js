import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class ImagePost extends React.PureComponent{
  render() {
    const { postData, name } = this.props;

    return (
      <div>
        <div className="row">
          <img
            alt="post"
            className="post-image"
            src={postData.get('image')}
          />
        </div>
        <div className="row icon-wrapper">
          <div className="col-2 like-wrapper">
            <a onClick={this.props.handlePostLike}>
              <Icon icon="like" />
            </a>
          </div>
          <div className="col-2 like-wrapper">
            <a onClick={this.props.handleViewComments}>
              <Icon icon="comment" />
            </a>
          </div>
          <div className="col-2 like-wrapper">
            <Icon icon="envelope" />
          </div>
          <div className="col-4">
          </div>
          <div className="col-2 save-wrapper">
            <Icon icon="bookmark" />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className="comment-text">Liked by</p>&nbsp;
            <p className="comment-text comment-bold">{postData.get('likes')}</p>&nbsp;
            <p className="comment-text comment-bold">others</p>
          </div>
          <div className="col-12">
            <p className="comment-text comment-bold">
              {name}
            </p>&nbsp;
            <p className="comment-text">Hello</p>
          </div>
        </div>
        {
          postData && postData.get('comments') && postData.get('comments').size > 0 ?
            <a onClick={this.props.handleViewComments}>View {postData.get('comments').size} comments</a> :
              <a onClick={this.props.handleViewComments}>Add Comment</a>
        }
        
      </div>
    );
  }
}

export default ImagePost;
