import React from 'react';
import { connect } from 'react-redux'
import { Map, List } from 'immutable';
import { bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom';
import Profile from '../Profile';
import Post from '../Post';
import Footer from '../../components/Footer';
import Comments from '../Comments';

class App extends React.PureComponent{
  render() {
    return (
      <div className="container main-wrapper">
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Profile}/>
            <Route exact path='/post/:id' component={Post}/>
            <Route path='/post/:id/comments' component={Comments}/>
          </Switch>
        </BrowserRouter>
      </div>
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
