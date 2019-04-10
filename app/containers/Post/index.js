import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import Icon from '../../components/Icon';
import ImagePost from '../../components/ImagePost';
import Footer from '../../components/Footer';
import PostHeader from '../../components/ImagePost/header';
import { fetchPostDetails, handlePostLike } from '../../actions';
import { selectPostDetails } from '../../selectors';

class Post extends React.PureComponent{
  static propTypes = {
    postData: PropTypes.instanceOf(Map),
    fetchPostDetails: PropTypes.func,
    handlePostLike: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchPostDetails(this.props.match.params.id);
  }

  handleViewComments = () => {
    this.props.history.push(`${this.props.location.pathname}/comments`);
  }

  handlePostLike = () => {
    this.props.handlePostLike(this.props.match.params.id);
  }

  handleGoBack = () => {
    this.props.history.goBack();
  }

  render() {
    const { postData } = this.props;

    return (
      <div>
        <PostHeader goback={this.handleGoBack} />
        <div className="row post-user-wrapper">
          <div className="col-2 vertical-center post-dp-wrapper">
            <img
              alt="post"
              className="post-dp"
              src={postData.getIn(['profile', 'avatar'])}
            />
          </div>
          <div className="col-8 vertical-center post-name-wrapper">
            <p className="text-bold">{postData.getIn(['profile', 'name'])}</p>
          </div>
          <div className="col-2 vertical-center">
            <Icon icon="options" />
          </div>
        </div>
        <ImagePost
          name={postData.getIn(['profile', 'name'])}
          postData={postData}
          handleViewComments={this.handleViewComments}
          handlePostLike={this.handlePostLike}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  postData: selectPostDetails(),
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchPostDetails,
  handlePostLike,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post);
