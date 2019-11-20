import { createStore } from 'redux';
import reducer from '../reducers/Reducer.js';




var store = (createStore)(reducer,window.devToolsExtension && window.devToolsExtension());


console.log("Store is: ");
export default store;