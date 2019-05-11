import React, { Component } from 'react';
import {connect} from 'react-redux';



class FeelingsCard extends Component {

    handleChange = (event) => {
        this.props.dispatch({type:'SET_FEELINGS', payload: event.target.value});
    }

    render() {
        return(
            <div>
                <h2>How Are You Feeling Today?</h2>
                <label>Feelings 1-5 </label>
                <input onChange={this.handleChange} placeholder="1-5" type="number"/>
                <button onClick={()=> this.props.history.push('/understanding')}>NEXT</button>
            </div>
          
        )
    }
}


  

export default connect()(FeelingsCard);