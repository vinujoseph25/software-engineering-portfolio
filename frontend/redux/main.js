import React from 'react';
import ReactDOM from 'react-dom';

import Login from './component/login.jsx';

import { Provider } from 'react-redux';
import store from './stores/store.js';

import { BrowserRouter, Route, Link } from 'react-router-dom';


ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route exact path="/" component={Login} />
            </div>
        </BrowserRouter>
    </Provider>),
    document.getElementById('app'));



