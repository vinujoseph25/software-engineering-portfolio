import React from 'react'; 
import ReactDOM from 'react-dom';
import $ from 'jquery';

class Timer extends React.Component{
                constructor(props){
                                   super(props);
                                   this.start = this.start.bind(this);
                                   this.state = {count: 0};
                                  }
 
                start(){
                        this.setState({ count: this.state.count + 1 });
                       }

                componentDidMount(){
                                    this.interval = setInterval(this.start, 2000);
                                   }
								   
								   
								   
                componentWillUnmount(){
                                       console.log('Component WILL UNMOUNT!')
									    clearInterval(this.interval);
                                      
                                      }

                render(){
                         return (<div>
                                      <Updates new={this.state.count} />
                                 </div>);
                        }
}



class Updates extends React.Component{
              componentWillReceiveProps(newProps){  
                                                  console.log('Received new props:', newProps);
                                                  }

              shouldComponentUpdate(newProps, newState){
                                                        if(this.props.new <=4){
                                                        console.log('shouldComponentUpdate:', newProps);
                                                        return true;
														
														}
														
                                                        else{ return false; }
                                                        }


              componentWillUpdate(nextProps, nextState){
                                                        console.log('Component updated:', nextProps);
                                                        var reference = $(ReactDOM.findDOMNode(this));
                                                        reference.css("color", "brown");
                                                        
                                                        console.log('Updating');
                                                        }
														
														
               componentDidUpdate(prevProps, prevState){
                                                        console.log('Previous value destroyed:', prevProps);
                                                        console.log('Updated');
                                                        }


               render(){
                        return (<div>
                                    <h2>Counted: {this.props.new}</h2>
                                </div>);
                        }
} 

export default Timer;