import { createAction, createSlice } from '@reduxjs/toolkit'

//slice is just like reducer just with extra fectures

const initialState = {
  bonus : 0,
}

const incrementByAmount = createAction('account/incrementByAmount')

export const bonusSlice = createSlice({
  name: 'bonus',
  initialState,
  reducers: {
    increment: (state) => {
     //this does not mutate state directly, it makes a copy just like immer library
      state.bonus += 1
    }
  },
  //if you want to run multiple reducer in different slice when action is dispatched, you can use extraReducers and createAction from same name as created in the other slice, so when action of other slice will be dispatched, this reducer will also run
  extraReducers: (builder)=> {
    builder.addCase(incrementByAmount , (state , action)=>{
        if(action.payload>=100){
            state.bonus += 1;
        }
  
    })
  }
})

// Action creators are generated for each case reducer function
//type with account/function name will be created
// eg:- bonus/increment
//eg: bonus/decrement
export const { increment} = bonusSlice.actions

export default bonusSlice.reducer
//gives us reducer to pass in store