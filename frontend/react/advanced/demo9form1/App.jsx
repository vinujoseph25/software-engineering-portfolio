import React from 'react';

class Login extends React.Component {
      render(){
      	     return <form> 
                    <h2> Login </h2>
<input type = "text" value = "123" placeholder="UserName" /> <br/><br/>

<input type = "password" value = "" placeholder="Enter Password" /> <br/><br/>

<input type = "submit" />
                                </form>
   	                     }
    }

export default Login;