import React from "react"
import {connect} from "react-redux"

import {getSecondsPerTurn} from "../../reducers/setting"

import TurnScore from "../turnScore"
import CharacterCard from "../characterCard"
import Timer from "../timer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"

function TurnView({finishPlaying, secondsPerTurn}) {
  const {t} = useTranslation()

  return (
    <div>
      <TurnScore />
      <CharacterCard />
      <Timer seconds={secondsPerTurn} handler={finishPlaying} />
      <ActionButton buttonText={t("Next character")} />
      <ActionButton buttonText={t("Right answer")} />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  secondsPerTurn: getSecondsPerTurn(state),
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(TurnView)
