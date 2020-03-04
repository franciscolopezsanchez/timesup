import React from "react"
import {connect} from "react-redux"

import {getTeamStats} from "../../reducers/stats"

function TeamScore({teamStats, team}) {
  return (
    <section>
      <header>Equipo {team}</header>
      {teamStats &&
        teamStats.map(player => {
          return (
            <div key={player.player}>
              {player.player}: <span>{player.rightAnswers}</span>
            </div>
          )
        })}
    </section>
  )
}

const mapStateToProps = (state, props) => ({
  teamStats: getTeamStats(state, props.team, props.round),
  team: props.team,
})

export default connect(mapStateToProps, null)(TeamScore)
