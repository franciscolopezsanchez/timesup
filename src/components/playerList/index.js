import React, {useState} from "react"
import PlayerInput from "../playerInput"
import Player from "../player"

import styles from "./playerList.module.scss"

const getTeamPanelClasses = teamId => {
  let teamClass = teamId === 0 ? styles.yellowTeam : styles.blueTeam
  return styles.teamPanel + " " + teamClass
}

function PlayerList({teamId, teamName, players, createPlayer, removePlayer}) {
  const [showPlayers, setShowPlayers] = useState(false)

  if (!players) return null
  return (
    <div className={getTeamPanelClasses(teamId)} onClick={() => setShowPlayers(true)}>
      {showPlayers ? (
        <div className="playerList">
          <ul>
            {players.map(player => {
              return (
                <li key={player.name} className="player">
                  <Player name={player.name} onRemovePlayer={removePlayer} />
                </li>
              )
            })}
            <li className="playerInput">
              <PlayerInput
                createPlayer={createPlayer}
                teamId={teamId}
                teamName={teamName}
              />
            </li>
          </ul>
        </div>
      ) : (
        <div className={styles.panelTitle}>{teamName}</div>
      )}
    </div>
  )
}

export default PlayerList
