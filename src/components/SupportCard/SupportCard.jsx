import React, { Component } from 'react';
import { connect } from 'react-redux';



class SupportCard extends Component {
    render() {
        return (
            <div>
                <h2>Do you feel supported by staff today?</h2>
                <label>1-5</label>
                <input placeholder="1-5"></input>
                <button onClick={()=> this.props.history.push('/comments')}>NEXT</button>
            </div>


        )
    }
}




export default connect()(SupportCard);