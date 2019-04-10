import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

class CommentHeader extends React.PureComponent{
  render() {
    return (
      <div className="row profile-header-wrapper">
        <div className="col-3">
          <a onClick={this.props.goback}>
            <Icon icon="back" />
          </a>
        </div>
        <div className="col-6">
          <p className="profile-header-title">Comments</p>
        </div>
        <div className="col-3">
        </div>
      </div>
    );
  }
}

export default CommentHeader;
