import React from "react"
import {connect} from "react-redux"
import {createGame, startNewRound} from "../../actions/game"
import {selectCharacters} from "../../actions/characters"
import {getCharactersPerPlayer} from "../../reducers/setting"
import {getNumberOfPlayers} from "../../reducers/player"

import PlayerListContainer from "../../containers/playerListContainer"
import SettingListContainer from "../../containers/settingListContainer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

import SETTINGS from "../../config-files/settings-config"

function GameCreation({
  createGame,
  startNewRound,
  selectCharacters,
  charactersPerPlayer,
  numberOfPlayers,
}) {
  const {t} = useTranslation()

  return (
    <div>
      <PlayerListContainer teamId={0} teamName="Equipo Azul" />
      <PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
      <SettingListContainer settings={SETTINGS} />
      <Link to="/play">
        <ActionButton
          disabled={numberOfPlayers < 4}
          buttonText={t("Play")}
          handler={() => {
            createGame()
            startNewRound()
            selectCharacters(charactersPerPlayer * numberOfPlayers)
          }}
        />
      </Link>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  charactersPerPlayer: getCharactersPerPlayer(state),
  numberOfPlayers: getNumberOfPlayers(state),
})

const mapDispatchToProps = dispatch => ({
  createGame: () => dispatch(createGame()),
  startNewRound: () => dispatch(startNewRound()),
  selectCharacters: numberOfCharacters => dispatch(selectCharacters(numberOfCharacters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameCreation)
