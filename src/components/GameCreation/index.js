import React from "./node_modules/react"
import "./GameCreation.css"
import PlayerListContainer from "../../containers/playerListContainer/PlayerListContainer"
import SettingListContainer from "../../containers/SettingListContainer/SettingListContainer"
import ActionButton from "../actionButton/ActionButton"
import {useTranslation} from "./node_modules/react-i18next"
import {Link} from "./node_modules/react-router-dom"
import SETTINGS from "../../config-files/settings-config"

function GameCreation() {
  const {t} = useTranslation()

  return (
    <div>
      <PlayerListContainer teamId={0} teamName="Equipo Azul" />
      <PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
      <SettingListContainer settings={SETTINGS} />
      <Link to="/play">
        <ActionButton buttonText={t("Play")} />
      </Link>
    </div>
  )
}

export default GameCreation
