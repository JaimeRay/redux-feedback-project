import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';



class ReviewBox extends Component {

handleSubmit = () =>{
    //package up data 
    //axios post
    axios({
        method: 'POST',
        url: '/review',
        data: this.props.reduxState.feedbackReducer
    }).then(response =>{
        console.log(response)
    }).catch(err =>{
        console.log(err)
    })
}





    render() {
        return (
            <div>
                <h2>Review</h2>
                <p>Feelings {this.props.reduxState.feedbackReducer.feelings} </p> 
                <p>Understanding {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments {this.props.reduxState.feedbackReducer.comments}</p>
                <button onClick={this.handleSubmit}>Next</button>
            </div>

        )
    }
}

const mapRedux = (reduxState) => {
    return {reduxState}
}


export default connect(mapRedux)(ReviewBox);