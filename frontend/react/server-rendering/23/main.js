import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Home extends React.Component {
                  render() {
                            return (
                                    <div><br/><br/>
               <img src="/img/UI.PNG" width="600" height="190"/><br/><br/>
               <h4> Just Launched...</h4><br/>
                <li>Angular</li>
                <li>React</li>
                <li>Express</li>
                 <li>Vue</li>
									
                                    </div>
                                    )
                          }
}



export class Login extends React.Component {
                   constructor(props){
                                      super(props);
                                      this.state = { data: {name: '', password: ''}}
                                      this.setEmpState = this.setEmpState.bind(this);
                                      this.handleLogin = this.handleLogin.bind(this);
                                     };


                   setEmpState(e){
                                  var field = e.target.name;
                                  var value = e.target.value;
                                  this.state.data[field] = value;
                                  return this.setState({data: this.state.data});
                                 }

handleLogin(e){
e.preventDefault();
if((this.refs.name.value=="") || (this.refs.pwd.value==""))
{ alert("Please enter details"); }
       else
            { this.props.history.replace('/home'); }
}

                   render(){
                            return (<div>
                                         <form onSubmit={this.handleLogin}>
                                         <br/><h2>Login</h2>
                                         <input type="text" name="name" ref="name" 
                                                placeholder="User Name" />
                                         <br/><br/>
                                         <input type="password" name="password" ref="pwd" 
                                                placeholder="Password" />
                                         <br/><br/>
                                         <button>Submit</button> 	
                                         </form>
                                     </div>);
                           }
}

ReactDOM.render((<Router>
<div>
<Route exact path = "/" component = {Login} />
<Route path = "/home" component = {Home} />
</div>
</Router>),document.getElementById('app'));
