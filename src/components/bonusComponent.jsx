import React from 'react'
import './compo.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from '../slices/bonusSlice'

const BonusComponent = () => {
  const bonus = useSelector(state=> state.bonusReducer.bonus)
  const dispatch = useDispatch()
 
  return (
    <div className='compoDiv'>
        <p>Bonus Component</p>
        <h3>Total points : {bonus}</h3>
        <button onClick={()=>{
          return dispatch(increment())
        }}>Increment</button>
    </div>
  )
}

export default BonusComponent