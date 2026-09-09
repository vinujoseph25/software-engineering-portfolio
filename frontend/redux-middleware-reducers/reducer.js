import {combineReducers} from 'redux';

var reducer = (state = {
    count: 0
}, action) => {
    var currentCount=state.count;
    switch (action.type) {
        case "INCREMENT":
            return Object.assign({},state,{count:currentCount+1});

        case "DECREMENT":
            return Object.assign({},state,{count:currentCount-1});

        default:
            return state;
    }
}

var reducer_1 = (state = {
    count_1: 0
}, action) => {
    var currentCount=state.count_1;
    switch (action.type) {
        case "INCREMENT_1":
            return Object.assign({},state,{count_1:currentCount+1});

        case "DECREMENT_1":
            return Object.assign({},state,{count_1:currentCount-1});

        default:
            return state;
    }
}

export default combineReducers({
    reducer,
    reducer_1
});