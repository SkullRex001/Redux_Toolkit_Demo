import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

const initialState = {
  amount : 0,
}


export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId , thunkAPI)=>{
        const response = await fetch(`http://localhost:8080/account/${userId}`)
        return await response.json().amount
    }
)


export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    increment: (state) => {
     //this does not mutate state directly, it makes a copy just like immer library
      state.amount += 1
    },
    decrement: (state) => {
      state.amount -= 1
    },
    incrementByAmount: (state, action) => {
      state.amount += parseInt(action.payload)
    },
  },
  extraReducers : (builder)=>{
   builder.addCase(getUserAccount.fulfilled , (state , action)=>{
    state.amount = action.payload;
    state.pending = false
   }).addCase(getUserAccount.pending , (state , action) =>{
    state.pending = true
   }).addCase(getUserAccount.rejected , (state , action)=>{
    state.error = action.error
   })
  }
})



// Action creators are generated for each case reducer function
//type with account/function name will be created
// eg:- account/increment
//eg: account/decrement
export const { increment, decrement, incrementByAmount } = accountSlice.actions

export default accountSlice.reducer
//gives us reducer to pass in store