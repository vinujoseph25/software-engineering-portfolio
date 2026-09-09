import React from 'react';

import axios from 'axios';

class Courses extends React.Component {
 constructor(props){
                                   super(props);
								   this.handleChange=this.handleChange.bind(this);
								    this.handleEmail=this.handleEmail.bind(this);
								   this.handleSubmit=this.handleSubmit.bind(this);
                                   this.state = {
                                                 name:'', email:''
                                                }
                                  

                                  };

  handleChange(event){
    this.setState({ name: event.target.value });
  }
  
   handleEmail(event){
    this.setState({ email: event.target.value });
  }

  handleSubmit(event){
    event.preventDefault();

    const user = {
      name: this.state.name,
	  email:this.state.email
    };

    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then(res => {
        console.log("here", res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
			   <input type="text" name="email" onChange={this.handleEmail} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default Courses;