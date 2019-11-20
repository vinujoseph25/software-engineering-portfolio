import { createStore, applyMiddleware } from 'redux';
import indexReducer from './reducer.js';
import thunk from 'redux-thunk';

var Store = applyMiddleware(thunk)(createStore)(indexReducer);

export default Store;