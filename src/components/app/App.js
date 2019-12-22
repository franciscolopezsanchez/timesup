import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import './App.css'
import GameCreation from '../gameCreation/GameCreation.js'
import RoundInstructions from '../roundInstructions/RoundInstructions.js'
import TurnView from '../turnView/TurnView.js'

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route path="/turn">
              <TurnView/>
            </Route>
            <Route path="/round">
              <RoundInstructions/>
            </Route>
            <Route path="/">
              <GameCreation/>
            </Route>
          </Switch>
      </Router>
    </div>
  )
}

export default App
