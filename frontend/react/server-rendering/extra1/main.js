import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Counter extends React.Component {
                constructor() {
    super();
    this.handleData = this.handleData.bind(this);
	this.update = this.update.bind(this);
    this.state = {
      count: 1
    };
  }
  
  handleData(data) {
    this.setState({
      count: data
    });
  }
  
  update(){
	  this.setState({count:this.state.count+1});
  }
  
  render() {
    return <Router>
<div>
<Link to="/">Counter</Link> |
<Link to="/result"> Result </Link> 
<br/>
<br/>
<div>
<button onClick={this.update}>count</button>
				<p>{this.state.count}</p>
				</div>
				<hr/>
<Route exact path = "/" component={Result} />

<Route path = "/result" component={() => <Result value={this.state.count} fromApp={this.handleData} /> } />
 
</div>
</Router>
  }
    }

export class Result extends React.Component {
                 constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  submitHandler(e) {
    e.preventDefault();
    this.props.fromApp(0); 
  }
  

  render() {
    return <div>
       <p>{this.props.value}</p>
		<button onClick={this.submitHandler}>Reset</button>
      </div>
  }
}



ReactDOM.render(<Counter />, document.getElementById('app'));

