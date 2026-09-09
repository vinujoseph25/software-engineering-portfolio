    import React from 'react';

class AppComp extends React.Component {
		
render() {
                            var x=25, y=30
                            return (<div>                
                                         <h3> Evaluating expression </h3><br/>
                                         <h4> {x} {">"}{y} {":"} {x>y ? 'True' : 'False'} </h4></div>)
   	                    }
    }

    export default AppComp;
