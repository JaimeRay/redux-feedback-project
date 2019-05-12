import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReviewBox from '../ReviewBox/ReviewBox'


class SupportCard extends Component {
    handleChange = (event) => {
        this.props.dispatch({type:'SET_SUPPORT', payload: event.target.value});
    }
    render() {
        return (
            <div>
                <h2>Do you feel supported by staff today?</h2>
                <label>1-5</label>
                <input onChange={this.handleChange} placeholder="1-5"></input>
                <button onClick={()=> this.props.history.push('/comments')}>NEXT</button>
                <ReviewBox />
            </div>


        )
    }
}




export default connect()(SupportCard);