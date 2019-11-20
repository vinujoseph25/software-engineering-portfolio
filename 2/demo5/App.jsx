import React from 'react';
import Resultant from './Result.jsx';

class AppComp extends React.Component {
	constructor(props){
		super(props);
		this.state={count:this.props.initial}
		this.update=this.update.bind(this);
	}
	
	update(){	
	this.setState({count:this.state.count+1});	
	}
	
  render() {
            return <div>
<Resultant  handleData={this.update}/>	
 <p>{this.state.count}</p>
			
				  </div>
   	       }
    }

export default AppComp;
