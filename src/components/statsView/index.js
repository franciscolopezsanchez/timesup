import React, {useEffect} from "react"
import {connect} from "react-redux"

import TeamScore from "../teamScore"
import ActionButton from "../actionButton"
import {useParams} from "react-router"

import {startNewRound} from "../../actions/game"
import {selectLastPlayerPlayed} from "../../actions/turn"
import {isGameFinished} from "../../reducers/game"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

function StatsView({startNewRound, selectLastPlayerPlayed, isGameFinished}) {
  const {t} = useTranslation()
  let {round} = useParams()

  useEffect(() => {
    selectLastPlayerPlayed()
    startNewRound()
  }, [])

  const getButtonText = () => {
    return isGameFinished ? t("Final Stats") : t("Next Round")
  }

  return (
    <div>
      <span>Stadisticas ronda {round} </span>
      <TeamScore round={round} team={0} />
      <TeamScore round={round} team={1} />
      <Link to="/get-ready">
        <ActionButton buttonText={getButtonText()} />
      </Link>
    </div>
  )
}

const mapStateToProps = state => ({
  isGameFinished: isGameFinished(state),
})

const mapDispatchToProps = dispatch => ({
  startNewRound: () => dispatch(startNewRound()),
  selectLastPlayerPlayed: () => dispatch(selectLastPlayerPlayed()),
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsView)
