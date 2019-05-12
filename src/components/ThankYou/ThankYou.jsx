import React, { Component } from 'react';
import {connect} from 'react-redux';



class ThankYou extends Component {
 
    render(){
        return(
            <div>
            <h2>Thank you for your feedback!</h2>
            <button onClick={()=> this.props.history.push('/')}>Restart</button>
        </div>
        )
    }
}


  

export default connect() (ThankYou);