import React, { Component } from 'react';
import {connect} from 'react-redux';



class UnderstandingCard extends Component {
    render(){
        return(
            <div>
            <h2>Do You Feel Like You Understand Things Today?</h2>
            <label> 1-5 </label>
            <input placeholder="1-5" type="number"></input>
            <button onClick={()=> this.props.history.push('/support')}>NEXT</button>
        </div>
        )
    }
}


  

export default connect() (UnderstandingCard);