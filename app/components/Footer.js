import React from 'react';
import Icon from './Icon';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer-wrapper">
        <div className="row">
          <div className="col-1" />
          <div className="col-2">
            <Icon
              icon="home"
            />
          </div>
          <div className="text-align-center  col-2">
            <Icon icon="search" />
          </div>
          <div className="text-align-center col-2">
            <Icon icon="camera" />
          </div>
          <div className="text-align-center col-2">
            <Icon icon="like" />
          </div>
          <div className="text-align-right col-2">
            <Icon
              icon="profile"
            />
          </div>
          <div className="col-1" />
        </div>
      </div>
    );
  }
}

export default Footer;
