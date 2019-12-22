import React from 'react'
import './App.css'
import GameCreation from '../gameCreation/GameCreation.js'
import RoundInstructions from '../roundInstructions/RoundInstructions.js'

function App() {
  return (
    <div className="App">
      <GameCreation/>
      __________________________________________________________________________________________
      <RoundInstructions/>
    </div>
  )
}

export default App
