import React, { Component } from 'react';
import {connect} from 'react-redux';



class ReviewBox extends Component {
    render(){
        return(
            <p>Review Box</p>
        )
    }
}

const mapRedux = (reduxState) =>{
    return reduxState
}
  

export default connect(mapRedux) (ReviewBox);