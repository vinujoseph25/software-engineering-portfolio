import React from 'react';
import { connect } from 'react-redux';
import { increaseAction } from '../action/action.js';

function mapStateToProps(state) {
console.log("map", state);
  return {
    counter: state.count
  }
}
    
function mapDispatchToProps(dispatch) {
  return {
    onhandlelogin: () => dispatch(increaseAction())
	
  }
}

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }
    handleLogin(e){
        //e.preventDefault();  
        console.log("inside handleLogin");
        this.props.onhandlelogin();	
    }
	
    render() {	
		return (
		  <div>
			<button onClick={this.handleLogin}>Increase</button>
			
			<span>counted:{this.props.counter}</span>
		  </div>)
    }   
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);