var React = require ('react');




module.exports = class AppComp extends React.Component {

_handleClick(){
alert("Clicked");
}

render(){
return (
<html>
	<head> 
</head>
	<body> 
<div>
<h1>React server side rendering</h1>
<button onClick={this._handleClick}> Click </button>
</div>
<script src="/bundle.js" />
</body>
</html>
);

}


}

