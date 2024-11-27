import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0,
    secondCounter : 0
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment' : return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement' : return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2' : return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2' : return {...state, secondCounter: state.secondCounter - action.value}
        // case 'reset' : return initialState
        case 'reset' : return{...state, firstCounter: initialState.firstCounter}
        case 'reset2' : return {...state, secondCounter: initialState.secondCounter}
        default : return state
    }
}

const Counter3 = () => {

    const [count, dispatch] = useReducer(reducer,initialState)
 
  return (
    <div>
        <h2>First Counter : {count.firstCounter}</h2>
        <h2>Second Counter : {count.secondCounter}</h2>
      <button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
      <button onClick={() => dispatch({type : 'decrement', value : 1})}>Decrement</button>
      <button onClick={() => dispatch({type : 'increment', value : 5})}>Increment by Five</button>
      <button onClick={() => dispatch({type : 'decrement', value : 5})}>Decrement by Five</button>
      <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
      <button onClick={() => dispatch({type : 'increment2', value : 1})}>Increment Counter 2</button>
      <button onClick={() => dispatch({type : 'decrement2', value : 1})}>Decrement Counter 2</button>
      <button onClick={() => dispatch({type : 'reset2'})}>Reset Counter 2</button>

    </div>
  )
}

export default Counter3
