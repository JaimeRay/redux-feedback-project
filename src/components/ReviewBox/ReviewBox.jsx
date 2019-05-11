import React, { Component } from 'react';
import { connect } from 'react-redux';



class ReviewBox extends Component {
    render() {
        return (
            <div>
                <h2>Review</h2>
                <p>Feelings {this.props.reduxState.feedbackReducer.feelings} </p> 
                <p>Understanding {this.props.reduxState.feedbackReducer.understanding}</p>
                <p>Support {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments {this.props.reduxState.feedbackReducer.comments}</p>
                {/* <button onClick={() => this.props.history.push('/')}>Next</button> */}
            </div>

        )
    }
}

const mapRedux = (reduxState) => {
    return {reduxState}
}


export default connect(mapRedux)(ReviewBox);