import React, { Component } from 'react';
import { connect } from 'react-redux';



class CommentsCard extends Component {
    handleChange = (event) => {
        this.props.dispatch({type:'SET_COMMENTS', payload: event.target.value});
    }
    render() {
        return (
            <div>
                <h2>Do you have any comments you would like to leave the staff?</h2>
                <input onChange={this.handleChange} placeholder="Comment here"></input>
                <button onClick={()=> this.props.history.push('/review')}>Next</button>
            </div>

        )
    }
}




export default connect()(CommentsCard);