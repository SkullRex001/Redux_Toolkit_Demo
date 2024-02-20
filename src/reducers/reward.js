//if we don't want to create reducer using slices we can do it directly. redux-toolkit gives us this option too

import { createReducer , createAction } from "@reduxjs/toolkit"

export const increment = createAction('reward/increment')

export const incrementByAmount = createAction('reward/incrementByAmount')


const initialState = {
    reward : 0
}

const rewardReducer = createReducer(initialState , (builder)=>{
    builder.addCase(increment , (state , action)=>{
        state.reward++
    }).addCase(incrementByAmount , (state , action)=>{
        state.reward += action.payload
        //function will accept payload as an input
    })
})

export default rewardReducer