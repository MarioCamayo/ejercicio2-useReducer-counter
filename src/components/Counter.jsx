import { useReducer } from "react"

const reducer = (state, action) => {
    // usando if else
    // if(action.type === 'increment'){
    //     return state + 1
    // }
    // if( action.type === 'decrement'){
    //     return state - 1
    // }
    // if( action.type === 'reset'){
    //     return 0
    // }
    // return state

    // const types = {
    //     increment: 'increment',
    //     decrement: 'decrement',
    //     reset: 'reset'
    // }

    // utilizando switch
    switch (action.type) {
        case 'increment':
            return state+1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return 0;
        default:
            return state

    }
}

const Counter = () => {
    const [counter, dispatch] = useReducer(reducer, 0)


    return (
        <>
            <h1>Cliks: {counter} </h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            <hr />


        </>
    )
}

export default Counter