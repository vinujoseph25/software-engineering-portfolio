import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

export class Home extends React.Component {
        render() {
                 return (
                         <Router>
                                <div>
                                 <h4>Welcome&nbsp;{this.props.match.params.name} to UI courses</h4>
                                 <img src="/img/UI.PNG" width="600" height="190" /><br/><br/>
                                 <h4> Just Launched...</h4>
<Link to="/display/Angular"> <li>Angular</li> </Link> | 
                                 <Link to="/display/React"> <li>React</li></Link> |
                                 <Link to="/display/Express"> <li>Express</li> </Link> |
                                 <Link to="/display/Vue">  <li>Vue</li> </Link>    
								<Link to="/display">  <li>Vue</li> </Link>    
                                 <br/>
<Route path="/display/:topic" component={Display}/>
</div>
                                 </Router>
                                  )
                          }
}

export class Display extends React.Component{
                     render(){
                              return <div>
                                          <h2>Inside {this.props.match.params.topic} component</h2>
										  
										  
										  
                                     </div>
                              }
};

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
                                      { this.props.history.push('/home/'+this.refs.name.value); }
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
ReactDOM.render((<Router >
<div>
<Route  exact path = "/"  component = {Login}  /> 
<Route   path = "/home/:name"  component = {Home}  /> 
</div>
</Router>), document.getElementById('app'));
