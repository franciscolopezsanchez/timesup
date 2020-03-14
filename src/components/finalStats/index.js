import React from "react"
import {BrowserRouter as Link} from "react-router-dom"

import ActionButton from "../actionButton"

function FinalStats() {
  return (
    <div>
      <div>TODO: Show Final Stats</div>
      <Link to="/create">
        <ActionButton buttonText={"Play again"} />
      </Link>
    </div>
  )
}

export default FinalStats
