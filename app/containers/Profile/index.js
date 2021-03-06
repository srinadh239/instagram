import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Header from '../../components/Profile/header';
import Info from '../../components/Profile/Info';
import Feed from '../../components/Profile/feed';
import Footer from '../../components/Footer';
import { fetchProfileDetails } from '../../actions';
import { selectProfileDetails } from '../../selectors';

class Profile extends React.PureComponent{
  static propTypes = {
    profile: PropTypes.instanceOf(Map),
    fetchProfileDetails: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchProfileDetails();
  }

  handlePostClick = (id) => {
    this.props.history.push(`/post/${id}`)
  }

  render() {
    const { profile } = this.props;

    return (
      <div>
        <Header profile={profile} />
        <Info profile={profile} />
        <p className="profile-name">{profile.get('name')}</p>
        <div className="row">
          <button className="call-button">call</button>
        </div>
        <Feed posts={profile.get('posts')} handlePostClick={this.handlePostClick} />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  profile: selectProfileDetails(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchProfileDetails,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
