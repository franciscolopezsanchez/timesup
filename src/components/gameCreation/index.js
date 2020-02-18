import React from "react"
import {connect} from "react-redux"
import {createGame, startNewRound} from "../../actions/game"
import {selectCharacters} from "../../actions/characters"

import PlayerListContainer from "../../containers/playerListContainer"
import SettingListContainer from "../../containers/settingListContainer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

import SETTINGS from "../../config-files/settings-config"

function GameCreation({createGame, charactersPerPlayer}) {
  const {t} = useTranslation()

  return (
    <div>
      <PlayerListContainer teamId={0} teamName="Equipo Azul" />
      <PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
      <SettingListContainer settings={SETTINGS} />
      <Link to="/play">
        <ActionButton buttonText={t("Play")} handler={createGame(charactersPerPlayer)} />
        {`hola` + charactersPerPlayer}
      </Link>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  charactersPerPlayer: state.settings.find(setting => {
    return setting.id === "CHARACTERS_PER_PLAYER"
  }).value,
})

const mapDispatchToProps = dispatch => ({
  createGame: charactersPerPlayer => {
    dispatch(createGame())
    dispatch(startNewRound())
    dispatch(selectCharacters(charactersPerPlayer))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameCreation)
