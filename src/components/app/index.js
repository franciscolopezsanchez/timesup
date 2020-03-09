import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import styles from "./app.module.scss"

import Title from "../title"
import GameCreation from "../gameCreation"
import GameController from "../gameController"
import StatsView from "../statsView"

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Title />
        <Router>
          <Switch>
            <Route exact path="/">
              <GameCreation />
            </Route>
            <Route exact path="/play">
              <GameController />
            </Route>
            <Route exact path="/stats/:round">
              <StatsView />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
