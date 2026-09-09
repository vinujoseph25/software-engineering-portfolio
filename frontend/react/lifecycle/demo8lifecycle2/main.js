import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './App.jsx';

ReactDOM.render(<Timer />, document.getElementById('app'));

    setTimeout(() => {
                      ReactDOM.unmountComponentAtNode( document.getElementById('app') );
                     }, 30000);