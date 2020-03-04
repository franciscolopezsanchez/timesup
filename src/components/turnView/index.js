import React from "react"
import {connect} from "react-redux"

import {getSecondsPerTurn} from "../../reducers/setting"
import {getPlayerPlaying} from "../../reducers/game"
import {getNumberCharactersLeft} from "../../reducers/rounds"

import {selectCharacter, removeCharacter} from "../../actions/rounds"
import {rightAnswer} from "../../actions/stats"
import {finishRound} from "../../actions/game"

import TurnScore from "../turnScore"
import CharacterCard from "../characterCard"
import Timer from "../timer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"

function TurnView({
  finishPlaying,
  secondsPerTurn,
  playerPlaying,
  charactersLeft,
  selectCharacter,
  removeCharacter,
  rightAnswer,
  finishRound,
}) {
  const {t} = useTranslation()

  return (
    <div>
      <div>Jugando: {playerPlaying.name}</div>
      <TurnScore player={playerPlaying.name} />
      <CharacterCard />
      <Timer seconds={secondsPerTurn} handler={finishPlaying} />
      <ActionButton buttonText={t("Next character")} handler={selectCharacter} />
      <ActionButton
        buttonText={t("Right answer")}
        handler={() => {
          removeCharacter()
          rightAnswer(playerPlaying.name)

          if (charactersLeft - 1 === 0) {
            finishRound()
          }
        }}
      />
    </div>
  )
}

const mapStateToProps = state => ({
  secondsPerTurn: getSecondsPerTurn(state),
  playerPlaying: getPlayerPlaying(state),
  charactersLeft: getNumberCharactersLeft(state),
})

const mapDispatchToProps = dispatch => ({
  selectCharacter: () => dispatch(selectCharacter()),
  removeCharacter: () => dispatch(removeCharacter()),
  rightAnswer: playerPlaying => dispatch(rightAnswer(playerPlaying)),
  finishRound: () => dispatch(finishRound()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TurnView)
