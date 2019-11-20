import { connect } from 'react-redux';
import { Increment, Decrement, IncrementWithDelay } from './../actions.js';
import CounterComp from './CounterComp.jsx';

//connect redux and react
var mapStateToProps = (state) => {
    console.log('from counter component',state);
    return {
        countVal: state.reducer_1.count_1
    }
}

var mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => {
            dispatch(IncrementWithDelay());
        },
        onDecrement: () => {
            dispatch(Decrement());
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CounterComp);