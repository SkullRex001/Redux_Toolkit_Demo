import React from 'react'
import './compo.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment , incrementByAmount } from '../reducers/reward'

const Reward = () => {
    const reward = useSelector(state=> state.rewardReducer.reward)
    const dispatch = useDispatch()
    return (
        <div className='compoDiv'>
            <p>Reward Component</p>
            <h3>Total reward : {reward}</h3>
            <button onClick={()=>{
              return dispatch(increment())
            }}>Increment</button>
             <button onClick={()=>{
              return dispatch(incrementByAmount(6))
            }}>Increment By Amount 6</button>
        </div>
      )
}

export default Reward