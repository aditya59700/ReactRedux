import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy_cake } from '../redux/cakes/cakeActions'

const CakeContainer = () => {
    const numberOfCakes = useSelector(state => state.cake.numberOfCakes)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Number of Cakes : {numberOfCakes}</h3>
      <button onClick={() => {dispatch(buy_cake())}}>Buy Cake</button>
    </div>
  )
}

export default CakeContainer
