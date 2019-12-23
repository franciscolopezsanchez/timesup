import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import styles from "./App.module.scss"
import GameCreation from "../gameCreation/GameCreation"
import RoundInstructions from "../roundInstructions/RoundInstructions"
import TurnView from "../turnView/TurnView"
import StatsView from "../statsView/StatsView"

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
