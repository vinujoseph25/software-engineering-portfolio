    import React from 'react';
	import ChildComp from './Child.jsx';

    class AppComp extends React.Component {
		
                  render() {
                           let view ;
						   var a=1;
if(a==10){
	view = <div>
			<p>Main </p>
			<ChildComp />
	</div>
	
}
else{
	view=<div><p>Main</p></div>
	
}
						   
						   
                            return <div>
							{view}
									</div>
   	                    }
    }

    export default AppComp;
