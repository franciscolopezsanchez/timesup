import React from "react"
import PlayerListContainer from "../../containers/playerListContainer/PlayerListContainer"
import SettingListContainer from "../../containers/SettingListContainer/SettingListContainer"
import ActionButton from "../ActionButton"
import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
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
