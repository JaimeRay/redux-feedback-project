import React, { Component } from 'react';
//import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import {HashRouter as Router, Route} from 'react-router-dom'

import FeelingsCard from '../FeelingsCard/FeelingsCard'
import CommentsCard from '../CommentsCard/CommentsCard'
import SupportCard from '../SupportCard/SupportCard'
import UnderstandingCard from '../UnderstandingCard/UnderstandingCard'
import ReviewBox from '../ReviewBox/ReviewBox'
import ThankYou from '../ThankYou/ThankYou'




class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <Router>
          <Route exact path="/" component={FeelingsCard}></Route>
          <Route path="/understanding" component={UnderstandingCard}></Route>
          <Route path="/support" component={SupportCard}></Route>
          <Route path="/comments" component={CommentsCard}></Route>
           <Route path="/review" component={ReviewBox}></Route>
          <Route path="/thankyou" component={ThankYou}></Route> 
        </Router>
    
      </div>
    );
  }
}

export default connect() (App);
