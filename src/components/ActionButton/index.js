import React from "react"
import styles from "./ActionButton.module.css"

function ActionButton({buttonText, handler}) {
  if (!buttonText) return null
  if (!handler) handler = () => null
  return (
    <button className={styles.button} onClick={() => handler()}>
      {buttonText}
    </button>
  )
}

export default ActionButton
