import React from "react"
import Player from "../player"
import styles from "./Team.module.css"

function Team({title, players, onAddPlayer}) {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.players}>
        {players.map(({name, onRemovePlayer}) => (
          <Player key={name} name={name} onRemovePlayer={onRemovePlayer} />
        ))}
      </div>
      {onAddPlayer && (
        <button className={styles.action} onClick={onAddPlayer}>
          Add Player
        </button>
      )}
    </div>
  )
}

export default Team
