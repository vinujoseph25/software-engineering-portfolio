    import React from 'react';
	
	
	class Child extends React.Component {
  constructor() {
    super();
    this.submitHandler = this.submitHandler.bind(this);
  }
  
  submitHandler(e) {
    e.preventDefault();
    this.props.fromApp(0); 
  }
  

  render() {
    return (
      <div>
       <p>{this.props.value}</p>
		<button onClick={this.submitHandler}>Reset</button>
      </div>
    );
  }
}




    export default Child;
