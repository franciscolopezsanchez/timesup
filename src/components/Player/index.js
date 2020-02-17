import React from "react"
import styles from "./Player.module.css"
import PropTypes from "prop-types"

function Player({name = "Unknown", onRemovePlayer}) {
  return (
    <div className={styles.row}>
      <img
        className={styles.avatar}
        src={`https://api.adorable.io/avatars/50/${name}@adorable.png`}
        alt={name}
      />
      <span className={styles.name}>{name}</span>
      {onRemovePlayer && <button onClick={onRemovePlayer}>X</button>}
    </div>
  )
}

Player.propTypes = {
  name: PropTypes.string,
  onRemovePlayer: PropTypes.func,
}

export default Player
