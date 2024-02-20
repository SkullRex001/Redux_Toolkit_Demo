
import { useSelector } from 'react-redux'
import './App.css'
import AmountComponent from './components/amountComponent'
import BonusComponent from './components/bonusComponent'
import Reward from './components/reward'
function App() {
  const amount = useSelector(state=>state.accountReducer.amount)
  const bonus = useSelector(state=>state.bonusReducer.bonus)


  return (
    <>
      <p>App</p>
      <h3>Current Amount : ${amount}</h3>
      <h3>Total Bonus : {bonus}</h3>
      <AmountComponent />
      <BonusComponent />
      <Reward/>
    </>
  )
}

export default App
