import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styles from "./App.module.scss"
import GameCreation from "../gameCreation/GameCreation.js"
import RoundInstructions from "../roundInstructions/RoundInstructions.js"
import TurnView from "../turnView/TurnView.js"
import StatsView from "../statsView/StatsView.js"

function App() {
  return (
    <div className={styles.app}>
      <Router>
        <Switch>
          <Route path="/play">
            <TurnView />
          </Route>
          <Route path="/round">
            <RoundInstructions />
          </Route>
          <Route path="/stats">
            <StatsView />
          </Route>
          <Route path="/">
            <GameCreation />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
