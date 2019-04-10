import React, { Component } from 'react';
import Icon from '../Icon';

const images = [
  'http://lorempixel.com/300/480/people',
  'http://lorempixel.com/300/480/transport',
  'http://lorempixel.com/300/480/nature',
  'http://lorempixel.com/300/480/cats',
  'http://lorempixel.com/300/480/city',
  'http://lorempixel.com/300/480/sports',
];
class Feed extends React.PureComponent {
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
