import React from "react"
import {connect} from "react-redux"

import TeamScore from "../teamScore"
import ActionButton from "../actionButton"
import {useParams} from "react-router"

import {startNewRound} from "../../actions/game"
import {selectLastPlayerPlayed} from "../../actions/turn"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView({startNewRound, selectLastPlayerPlayed}) {
  const {t} = useTranslation()
  let {round} = useParams()

  const onButtonClick = () => {
    selectLastPlayerPlayed()
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

const mapDispatchToProps = dispatch => ({
  startNewRound: () => dispatch(startNewRound()),
  selectLastPlayerPlayed: () => dispatch(selectLastPlayerPlayed()),
})

export default connect(null, mapDispatchToProps)(StatsView)
