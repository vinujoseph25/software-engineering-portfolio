//Components will be rendered here.
import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Components/Counter.jsx';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './store.js';

ReactDOM.render((
    <Provider store={Store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Counter} />
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('app'));