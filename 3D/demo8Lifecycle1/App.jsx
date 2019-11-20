import React from 'react';
class Timer extends React.Component{
      constructor(props){
           super(props);
           this.start = this.start.bind(this);
           this.state = {secondsElapsed: 0};
      }                                              
      start(){
              this.setState ({secondsElapsed: this.state.secondsElapsed + 1});
              }
					   
      componentWillMount(){   
                           alert('Component mounted');
      }

      componentDidMount(){
                 this.interval = setInterval(this.start, 1000);
          }

      render(){
               return (<div>
                            <h2>Seconds Elapsed: {this.state.secondsElapsed}</h2>
                      </div>);
                         }
    } 

export default Timer;