import React from 'react'
import './App.css'
import GameCreation from '../gameCreation/GameCreation.js'
import RoundInstructions from '../roundInstructions/RoundInstructions.js'
import TurnView from '../turnView/TurnView.js'

function App() {
  return (
    <div className="App">
      <GameCreation/>
      __________________________________________________________________________________________
      <RoundInstructions/>
      __________________________________________________________________________________________
      <TurnView/>
    </div>
  )
}

export default App
