import React from 'react';
	

class Resultant extends React.Component {
  render() {
            return <div>
			<button onClick={this.props.handleData}>10</button>
						<p>{this.props.result}</p>
				  </div>
   	       }
    }

export default Resultant;
