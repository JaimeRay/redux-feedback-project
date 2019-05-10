import React, { Component } from 'react';
import {connect} from 'react-redux';



class feelingsCard extends Component {

    
    render(){
        return(
            <div>
                <h2>How Are You Feeling Today?</h2>
                <label>Feelings 1-5 </label>
                <input placeholder="1-5" type="number"></input>
                <button onClick={()=> this.props.history.push('/understanding')}>NEXT</button>
            </div>
          
        )
    }
}


  

export default connect() (feelingsCard);