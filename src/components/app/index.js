import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import styles from "./app.module.scss"

import Title from "../title"
import GameCreation from "../gameCreation"
import GameController from "../gameController"
import StatsView from "../statsView"
import FinalStats from "../finalStats"

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.app}>
        <Title />
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/create" />
            </Route>
            <Route exact path="/create">
              <GameCreation />
            </Route>
            <Route exact path="/get-ready">
              <GameController />
            </Route>
            <Route exact path="/stats/:round">
              <StatsView />
            </Route>
            <Route exact path="/end-game">
              <FinalStats />
            </Route>
            <Route>
              <Redirect to="/create" />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  )
}

export default App
