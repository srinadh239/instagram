import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';
import { convertTime } from '../../utils/time';
import { List } from 'immutable';

class CommentList extends React.PureComponent{
  static propTypes = {
    list: PropTypes.instanceOf(List),
    handleCommentLike: PropTypes.func,
  };

  render() {
    return (
      <div>
        {
          this.props.list && this.props.list.map((item) => <div className="row comment-wrapper" key={item.get('id')}>
            <div className="col-2 text-comment-image">
              <img
                alt="post"
                className="comment-profile-image"
                src={item.getIn(['profile', 'avatar'])}
              />
            </div>
            <div className="col-8 text-comment-wrapper">
              <div>
                <p className="text-comment-author">{item.getIn(['profile', 'name'])}&nbsp;</p>
                <p className="text-comment">{item.get('text')}</p>
              </div>
              <div>
                <p className="text-comment-time">{convertTime(item.get('createdOn'))} ago&nbsp;</p>
                { !!item.get('likes') && item.get('likes') > 0 && <p className="text-comment-time">{item.get('likes')} likes</p> }
              </div>
            </div>
            <div className="col-2">
              <a onClick={() => this.props.handleCommentLike(item.get('id'))}>
                <Icon icon="like" />
              </a>
            </div>
          </div>)
        }
      </div>
    );
  }
}

export default CommentList;
