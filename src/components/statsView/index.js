import React from "react"
import {connect} from "react-redux"

import TeamScore from "../teamScore"
import ActionButton from "../actionButton"
import {useParams} from "react-router"

import {startNewRound} from "../../actions/game"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView({startNewRound}) {
  const {t} = useTranslation()
  let {round} = useParams()

  const onButtonClick = () => {
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
})

export default connect(null, mapDispatchToProps)(StatsView)
