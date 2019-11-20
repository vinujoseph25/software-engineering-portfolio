    import React from 'react';
	import Child from './Child.jsx';
	

class AppComp extends React.Component {
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
    return (
      <div>
	  <h1>Fromparent</h1>
<button onClick={this.update}>{this.state.count}</button>
<hr />
 <Child fromApp={this.handleData} value={this.state.count}/> 
	</div>
    );
  }
    }

    export default AppComp;
