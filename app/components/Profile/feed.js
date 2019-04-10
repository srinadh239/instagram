import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { List } from 'immutable';

class Feed extends React.PureComponent {
  static propTypes = {
    posts: PropTypes.instanceOf(List),
    handlePostClick: PropTypes.func,
  };

  render() {
    const { posts } = this.props;

    return (
      <div>
        <div className="row feed-wrapper">
          <div className="col-4 text-align-center">
            <Icon icon="bookmark" />
          </div>
          <div className="col-4 text-align-center">
            <Icon icon="bookmark" />
          </div>
          <div className="col-4 text-align-center">
            <Icon icon="bookmark" />
          </div>
        </div>
        <div className="gallery-wrapper">
        <div className="row">
          {
            posts && posts.map((post) => <div className="col-4 text-align-center gallery" key={post.get('id')}>
              <a onClick={() => this.props.handlePostClick(post.get('id'))}>
                <img
                  alt="post"
                  className="gallery-image"
                  src={post.get('image')}
                />
              </a>
          </div>)
          }
        </div>
      </div>
      </div>
    );
  }
}

export default Feed;
