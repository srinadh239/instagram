import React from 'react';
import Icon from '../Icon';

class Header extends React.PureComponent{
  render() {
    const { profile } = this.props;

    return (
      <div className="row profile-header-wrapper">
        <div className="col-3">
        </div>
        <div className="col-6">
          <p className="profile-header-title">{profile.get('name')}</p>
        </div>
        <div className="col-3">
          <Icon className="float-right" icon="bookmark" />
        </div>
      </div>
    );
  }
}

export default Header;
