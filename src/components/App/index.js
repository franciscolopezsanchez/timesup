import React from "react"
import {BrowserRouter as Router, Switch, Route} from "./node_modules/react-router-dom"
import styles from "./App.module.css"
import Title from "../title/Title"
import GameCreation from "../gameCreation/GameCreation"
import GameController from "../gameController/GameController"

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
