import React from 'react';


class AppComp extends React.Component {
     render() {
               return(<div>
                      <h1> {this.props.element1} </h1>
                      <h1> {this.props.element2} </h1>
										
                      </div>);
                           }
    }

    AppComp.defaultProps = {
                              	element1 : "Hello",
								element2 : "React",
                           } 

export default AppComp;