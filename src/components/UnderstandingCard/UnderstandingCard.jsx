import React, { Component } from 'react';
import {connect} from 'react-redux';

import ReviewBox from '../ReviewBox/ReviewBox'

class UnderstandingCard extends Component {
    handleChange = (event) => {
        this.props.dispatch({type:'SET_UNDERSTANDING', payload: event.target.value});
    }
    render(){
        return(
            <div>
            <h2>Do You Feel Like You Understand Things Today?</h2>
            {/* <label> 1-5 </label> */}
            <input onChange={this.handleChange} placeholder="1-5" type="number"></input>
            <button onClick={()=> this.props.history.push('/support')}>NEXT</button>
            <ReviewBox />
        </div>
        )
    }
}


  

export default connect() (UnderstandingCard);