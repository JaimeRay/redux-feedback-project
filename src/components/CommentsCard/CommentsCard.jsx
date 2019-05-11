import React, { Component } from 'react';
import { connect } from 'react-redux';



class CommentsCard extends Component {
    render() {
        return (
            <div>
                <h2>Do you have any comments you would like to leave the staff?</h2>
                <input placeholder="Comment here"></input>
                <button>Next</button>
            </div>

        )
    }
}




export default connect()(CommentsCard);