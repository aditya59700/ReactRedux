import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buy_icecream } from '../redux/icecreams/icecreamAction'

const IceCreamContainer = () => {
    const numberOfICeCreams = useSelector(state => state.icecream.numberOfICeCreams)
    const dispatch = useDispatch()
  return (
    <div>
      <h3>Number of IceCreams : {numberOfICeCreams}</h3>
      <button onClick={() => {dispatch(buy_icecream())}}>Buy Ice-Cream</button>
    </div>
  )
}

export default IceCreamContainer
