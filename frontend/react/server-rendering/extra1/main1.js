import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return (
   <Router>
<div>
<Link to="/">Counter</Link> |
<Link to="/result"> Result </Link> 

<Route exact path = "/" component={Counter} />
<Route path = "/result" component={Result} />



</div>
</Router>
    );
  }
    }




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
    return <div>
				<br/>
				<button onClick={this.update}>Count</button>
				<p>{this.state.count}</p>
				<hr/>
				<Result value={this.state.count} fromCounter={this.handleData}/>
		</div>
	
	
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



ReactDOM.render(<Home />, document.getElementById('app'));

