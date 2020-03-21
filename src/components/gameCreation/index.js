import React, {useState} from "react"
import {connect} from "react-redux"
import {startNewRound} from "../../actions/game"
import {selectCharacters} from "../../actions/characters"
import {getCharactersPerPlayer} from "../../reducers/setting"
import {getNumberOfPlayers} from "../../reducers/player"
import {isMinNumberPlayersAllowed} from "../../reducers/player"

import PlayerListContainer from "../../containers/playerListContainer"
import SettingListContainer from "../../containers/settingListContainer"
import ActionButton from "../actionButton"

import {useTranslation} from "react-i18next"
import {Link} from "react-router-dom"
import styles from "./gameCreation.module.scss"

import SETTINGS from "../../config-files/settings-config"

function GameCreation({
  startNewRound,
  selectCharacters,
  charactersPerPlayer,
  numberOfPlayers,
  minNumberPlayersAllowed,
}) {
  const {t} = useTranslation()
  const [showYellowTeam, setShowYellowTeam] = useState(false)
  const [showBlueTeam, setShowBlueTeam] = useState(false)

  return (
    <div className={styles.gameCreation}>
      <div
        className={styles.teamPanel + " " + styles.yellowTeam}
        onClick={() => setShowYellowTeam(true)}
      >
        {showYellowTeam ? (
          <PlayerListContainer teamId={1} teamName="Equipo Amarillo" />
        ) : (
          <div className={styles.panelTitle}>EQUIPO AMARILLO</div>
        )}
      </div>
      <div
        className={styles.teamPanel + " " + styles.blueTeam}
        onClick={() => setShowBlueTeam(true)}
      >
        {showBlueTeam ? (
          <PlayerListContainer teamId={0} teamName="Equipo Azul" />
        ) : (
          <div className={styles.panelTitle}>EQUIPO AZUL</div>
        )}
      </div>
      <SettingListContainer settings={SETTINGS} />
      <Link to="/playing">
        <ActionButton
          disabled={!minNumberPlayersAllowed}
          buttonText={t("Play")}
          handler={() => {
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
  minNumberPlayersAllowed: isMinNumberPlayersAllowed(state),
})

const mapDispatchToProps = dispatch => ({
  startNewRound: () => dispatch(startNewRound()),
  selectCharacters: numberOfCharacters => dispatch(selectCharacters(numberOfCharacters)),
})

export default connect(mapStateToProps, mapDispatchToProps)(GameCreation)
