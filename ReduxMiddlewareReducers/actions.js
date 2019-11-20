import fetch from 'isomorphic-fetch';

export function Increment() {
    return {
        type: "INCREMENT_1"
    }
}

export function Decrement() {
    return {
        type: "DECREMENT_1"
    }
}

export function IncrementWithDelay() {
    return (dispatch) => {
        fetch(`https://reqres.in/api/users?delay=3`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(
            (response) => {
                return response.json();
            }
            ).then(
            (response) => {
                console.log("response received", response);
                dispatch(Increment());
            }
            )
    }
}