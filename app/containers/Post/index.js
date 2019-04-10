import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Map, List } from 'immutable';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Icon from '../../components/Icon';
import ImagePost from '../../components/ImagePost';
import { fetchPostDetails, handlePostLike } from '../../actions';
import { selectPostDetails, selectProfileDetails } from '../../selectors';

class Post extends React.PureComponent{
  componentDidMount() {
    this.props.fetchPostDetails(this.props.match.params.id);
  }
  handleViewComments = () => {
    this.props.history.push(`${this.props.location.pathname}/comments`);
  }
  handlePostLike = () => {
    this.props.handlePostLike(this.props.match.params.id);
  }
  render() {
    const { postData, profile } = this.props;

    return (
      <div>
        <div className="row post-user-wrapper">
          <div className="col-2 vertical-center post-dp-wrapper">
            <img
              alt="post"
              className="post-dp"
              src={profile.get('avatar')}
            />
          </div>
          <div className="col-8 vertical-center post-name-wrapper">
            <p className="text-bold">{profile.get('name')}</p>
          </div>
          <div className="col-2 vertical-center">
            <Icon icon="options" />
          </div>
        </div>
        <ImagePost
          name={profile.get('name')}
          postData={postData}
          handleViewComments={this.handleViewComments}
          handlePostLike={this.handlePostLike}
        />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postData: selectPostDetails(),
  profile: selectProfileDetails(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPostDetails,
  handlePostLike,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
