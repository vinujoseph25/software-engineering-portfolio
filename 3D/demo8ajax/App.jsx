import React from 'react';
import axios from 'axios';

class Courses extends React.Component {
 constructor(props){
                                   super(props);
                                   this.state = {
                                                 details:[]
                                                }
                     
                                  };
								  

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const details = res.data;
        this.setState({ details });
      })
  }

  render() {
    return (
      <ul>
        { this.state.details.map(person => <li>{person.name} -- {person.id} --{person.email}</li>)}
      </ul>
    )
  }
}

export default Courses;