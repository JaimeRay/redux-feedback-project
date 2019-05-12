import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
//import {withRouter} from 'react-router-dom';


class ReviewBox extends Component {

    handleSubmit = () => {
        //package up data 
        //axios post
        axios({
            method: 'POST',
            url: '/review',
            data: this.props.reduxState.feedbackReducer
        }).then(response => {
            console.log(response)
            this.props.history.push('/thankyou')
        }).catch(err => {
            console.log(err)
        })
    }





    render() {
        let myButton;
        if (this.props.reduxState.feedbackReducer.feelings &&
            this.props.reduxState.feedbackReducer.understanding &&
            this.props.reduxState.feedbackReducer.support &&
            this.props.reduxState.feedbackReducer.comments) {
            myButton = <button onClick={this.handleSubmit}>Submit</button>
        } else {
            myButton = <button disabled>Submit</button>
        }
        return (
            <div>
                <h2>Review</h2>
                <p>Feelings: {this.props.reduxState.feedbackReducer.feelings} </p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
                {myButton}

            </div>

        )
    }
}

const mapRedux = (reduxState) => {
    return { reduxState }
}


export default connect(mapRedux)(ReviewBox);