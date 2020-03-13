import React from "react"
import {connect} from "react-redux"

import {getTeamStats, getTeamName} from "../../reducers/stats"

function TeamScore({teamStats, team, teamName}) {
  return (
    <section>
      <header>Equipo {teamName}</header>
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
  teamName: getTeamName(state, props.team),
  team: props.team,
})

export default connect(mapStateToProps, null)(TeamScore)
