import React from 'react';

class CounterComp extends React.Component {
    render() {
        return (
            <div>
                <h1>Counter value:{this.props.countVal}</h1>
                <button onClick={() => {
                    this.props.onIncrement();
                }}>Increment Counter</button>
                <button onClick={() => {
                    this.props.onDecrement();
                }}>Decrement Counter</button>
            </div>

        )
    }
}

export default CounterComp;