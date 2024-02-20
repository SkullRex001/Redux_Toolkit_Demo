import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './slices/accountSlice.js'
import bonusReducer from './slices/bonusSlice.js'
import { Provider } from 'react-redux'
import rewardReducer from './reducers/reward.js'

const store = configureStore({
  reducer: {
    accountReducer ,
    bonusReducer,
    rewardReducer
  }
})
// a globale state object will be created from the state of each reducer


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
   
  </React.StrictMode>,
)
