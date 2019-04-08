import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Map, List } from 'immutable';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

class App extends React.PureComponent{
  render() {
    return (
      <div>Hello</div>
    );
  }
}

const mapStateToProps = createStructuredSelector({

});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
