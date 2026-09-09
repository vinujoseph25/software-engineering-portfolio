import React from 'react';
import PropTypes from 'prop-types';

class AppComp extends React.Component {
   render() {
      return (
         <div>
            <h3>Array: </h3> <p>{this.props.array}</p>
            <h3>Boolean: </h3><p>{this.props.boolean ? "True" : "False"}</p>
            <h3>Function: </h3><p>{this.props.function(10)}</p>
            <h3>Number: </h3><p>{this.props.number}</p>
            <h3>String: </h3><p>{this.props.string}</p>
            <h3>Object: </h3><p>{this.props.emp.empName} <br/>
                        {this.props.emp.empId}< br/>
                        {this.props.emp.unit}</p>
         </div>
      );
   }
}

AppComp.propTypes = {
   array: PropTypes.array,
   boolean: PropTypes.bool,
   function: PropTypes.func,
   number: PropTypes.number,
   string: PropTypes.string,
   emp: PropTypes.object
}

AppComp.defaultProps = {
   array:[1,2,3,54],
   boolean: false,
   function: function(e){return e},
   number: 123,
   string: "React",	
   emp: {
         empName:"Roopashri",
         empId: 681592,
         unit: "ETA - UIM"
        }
}

export default AppComp;