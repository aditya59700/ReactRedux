import React, { useReducer } from 'react'

const initialState = {
    firstCounter : 0
}
const reducer = (state,action) => {
    switch(action.type){
        case 'increment' : return {firstCounter: state.firstCounter + action.value}
        case 'decrement' : return {firstCounter: state.firstCounter - action.value}
        case 'reset' : return initialState
        default : return state
    }
}

const Counter2 = () => {

    const [count, dispatch] = useReducer(reducer,initialState)
 
  return (
    <div>
        <h2>{count.firstCounter}</h2>
      <button onClick={() => dispatch({type : 'increment', value : 1})}>Increment</button>
      <button onClick={() => dispatch({type : 'decrement', value : 1})}>Decrement</button>
      <button onClick={() => dispatch({type : 'increment', value : 5})}>Increment by Five</button>
      <button onClick={() => dispatch({type : 'decrement', value : 5})}>Decrement by Five</button>
      <button onClick={() => dispatch({type : 'reset'})}>Reset</button>
    </div>
  )
}

export default Counter2
