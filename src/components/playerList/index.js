import React from "react"
import PlayerInput from "../playerInput"
import Player from "../player"

function PlayerList({teamId, teamName, players, createPlayer, removePlayer}) {
  if (!players) return null
  return (
    <div className="playerList">
      {teamName && <h3>{teamName}</h3>}
      <ul>
        {players.map(player => {
          return (
            <li key={player.name} className="player">
              <Player name={player.name} onRemovePlayer={removePlayer} />
            </li>
          )
        })}
        <li className="playerInput">
          <PlayerInput createPlayer={createPlayer} teamId={teamId} teamName={teamName} />
        </li>
      </ul>
    </div>
  )
}

export default PlayerList
