import React, { Component } from 'react';

class Info extends React.PureComponent {
  render() {
    const { profile } = this.props;

    return (
      <div className="row">
        <div className="col-4 profile-info-wrapper">
          <img
            alt="post"
            className="profile-info-image"
            src={profile.get('avatar')}
          />
        </div>
        <div className="col-7 profile-info-section">
          <div className="row">
            <div className="col-4 profile-details-wrapper">
              <p className="profile-details">{profile.get('posts') && profile.get('posts').size}</p>
              <p className="profile-details-title">posts</p>
            </div>
            <div className="col-4 profile-details-wrapper">
              <p className="profile-details">{profile.get('followers')}</p>
              <p className="profile-details-title">Followers</p>
            </div>
            <div className="col-4 profile-details-wrapper">
              <p className="profile-details">{profile.get('following')}</p>
              <p className="profile-details-title">Following</p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="edit-profile-button">Edit Profile</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
