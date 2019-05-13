import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
//import Button from '@material-ui/core/Button';


class ReviewBox extends Component {

    handleSubmit = () => {
        //package up data and send tp server 
        //axios post
        axios({
            method: 'POST',
            url: '/review',
            data: this.props.reduxState.feedbackReducer//gets data from the reducer with the inputs
        }).then(response => {
            console.log(response)
            this.props.history.push('/thankyou')
        }).catch(err => {
            console.log(err)
        })
    }


//     <Button variant="contained" color="primary" className={classes.button}>
//     Primary
//   </Button>
//  i could not figure out how to get the marerial UI button but i did try

    render() {
        //if all the inputs are filled in, the button will work. But if they are not the button will be disabled
        let myButton;
        if (this.props.reduxState.feedbackReducer.feelings &&
            this.props.reduxState.feedbackReducer.understanding &&
            this.props.reduxState.feedbackReducer.support &&
            this.props.reduxState.feedbackReducer.comments) {
            myButton = <button type="button" class="btn btn-primary"  onClick={this.handleSubmit}>Submit</button>
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
                        {/* I wanted to have the button disabled until i was on the review page but it still lights up
                        when all the inputs are filled in on the comments page. It doesnt work until i am on the 
                        review page though  */}
            </div>

        )
    }
}

const mapRedux = (reduxState) => {
    return { reduxState }
}


export default withRouter( connect(mapRedux)(ReviewBox));