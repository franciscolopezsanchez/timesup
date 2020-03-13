import React from "react"
import {connect} from "react-redux"

import TeamScore from "../teamScore"
import ActionButton from "../actionButton"
import {useParams} from "react-router"

import {startNewRound} from "../../actions/game"
import {initiateRoundStats} from "../../actions/stats"
import {selectNextPlayer} from "../../actions/turn"
import {getPlayers} from "../../reducers/player"
import {getNumberOfRounds} from "../../reducers/game"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView({
  players,
  numberOfRounds,
  selectNextPlayer,
  initiateRoundStats,
  startNewRound,
}) {
  const {t} = useTranslation()
  let {round} = useParams()

  const onButtonClick = () => {
    selectNextPlayer(players)
    initiateRoundStats(numberOfRounds, players)
    startNewRound()
  }

  return (
    <div>
      <span>Stadisticas ronda {round} </span>
      <TeamScore round={round} team={0} />
      <TeamScore round={round} team={1} />
      <Link to="/play">
        <ActionButton buttonText={t("Next Round")} handler={onButtonClick} />
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  players: getPlayers(state),
  numberOfRounds: getNumberOfRounds(state),
})

const mapDispatchToProps = dispatch => ({
  selectNextPlayer: players => dispatch(selectNextPlayer(players)),
  initiateRoundStats: (numberOfRounds, players) =>
    dispatch(initiateRoundStats(numberOfRounds, players)),
  startNewRound: () => dispatch(startNewRound()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsView)
