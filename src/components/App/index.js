import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import styles from "./App.module.css"
import Title from "../title/Title"
import GameCreation from "../GameCreation"
import GameController from "../GameController"

function App() {
  return (
    <div className={styles.app}>
      <Title />
      <Router>
        <Switch>
          <Route path="/play">
            <GameController />
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
