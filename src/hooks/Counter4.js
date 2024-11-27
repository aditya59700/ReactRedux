import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state,action) => {
    switch(action){
        case 'increment' : return state +1
        case 'decrement' : return state -1
        case 'reset' : return initialState
        default : return state
    }
}

const Counter4 = () => {

    const [count, dispatch] = useReducer(reducer,initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer,initialState)
 
  return (
    <div>
        <h2>{count}</h2>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>

      <h2>{countTwo}</h2>
      <button onClick={() => dispatchTwo('increment')}>Increment</button>
      <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
      <button onClick={() => dispatchTwo('reset')}>Reset</button>
    </div>
  )
}

export default Counter4
