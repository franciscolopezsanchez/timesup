import React, {Fragment} from "react"
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

import SETTINGS from "../../config-files/settings-config"

function GameCreation({
  startNewRound,
  selectCharacters,
  charactersPerPlayer,
  numberOfPlayers,
  minNumberPlayersAllowed,
}) {
  const {t} = useTranslation()

  return (
    <Fragment>
      <PlayerListContainer teamId={0} teamName="Equipo Amarillo" />
      <PlayerListContainer teamId={1} teamName="Equipo Azul" />
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
    </Fragment>
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
