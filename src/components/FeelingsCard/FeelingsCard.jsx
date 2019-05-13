import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReviewBox from '../ReviewBox/ReviewBox'


class FeelingsCard extends Component {

    componentDidMount() { 
       this.props.dispatch({type: 'CLEAR_STATE'})
      }

    handleChange = (event) => {
        this.props.dispatch({type:'SET_FEELINGS', payload: event.target.value});
    }

    render() {
        return(
            <div>
                <h2>How Are You Feeling Today?</h2>
                {/* i think it looked better without the lable in there, but i did start it out this way */}
                {/* <label>Feelings   </label> */}
                <input onChange={this.handleChange} placeholder="1-5" type="number"/>
                {/* on the click of the button it moves to the next page  */}
                <button onClick={()=> this.props.history.push('/understanding')}>NEXT</button>
                <ReviewBox />
            </div>
          
        )
    }
}


  

export default connect()(FeelingsCard);