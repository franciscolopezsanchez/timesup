import React from "react"
import {connect} from "react-redux"
import {createGame, startNewRound} from "../../actions/game"

import PlayerListContainer from "../../containers/playerListContainer"
import SettingListContainer from "../../containers/settingListContainer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"

import SETTINGS from "../../config-files/settings-config"

function GameCreation({createGame}) {
  const {t} = useTranslation()

  return (
    <div>
      <PlayerListContainer teamId={0} teamName="Equipo Azul" />
      <PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
      <SettingListContainer settings={SETTINGS} />
      <Link to="/play">
        <ActionButton buttonText={t("Play")} handler={createGame} />
      </Link>
    </div>
  )
}

const mapStateToProps = (state, props) => ({})

const mapDispatchToProps = dispatch => ({
  createGame: () => {
    dispatch(createGame())
    dispatch(startNewRound())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(GameCreation)
