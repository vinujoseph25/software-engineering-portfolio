import React from 'react';

class Login extends React.Component{
	
constructor(props){
                   super(props);
                   this.state = { data: {name: '', password: ''} }
                   this.setEmpState = this.setEmpState.bind(this);
                   this.handleLogin = this.handleLogin.bind(this);
                  };
                                                          
setEmpState(event){
               var field = event.target.name;
               var value = event.target.value; 
               this.state.data[field] = value; 
               this.setState({ data: this.state.data });
              }
                 
handleLogin(event){
               event.preventDefault();   
          alert('Logged in successfully');
              }

render(){
 return <form><h2> Login </h2>
              
			  <input type = "text" name="name" 
				placeholder = "UserName" 
				value = {this.state.data.name} 
				onChange = {this.setEmpState}/>
			  
			  <br/><br/>
			  
			  
			  
              <input type = "password"
				name="password" value = {this.state.data.password} 
				placeholder = "Password" 
				onChange = {this.setEmpState}/><br/><br/>
              
			  <input type = "submit" onClick = {this.handleLogin} />
			  
			  
			  <p>Name: {this.state.data.name}</p>
			  
       </form>
        }
}

export default Login;