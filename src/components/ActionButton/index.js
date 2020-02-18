import React from "react"
import styles from "./ActionButton.module.scss"

function ActionButton({buttonText, handler, disabled}) {
  if (!buttonText) return null
  if (!handler) handler = () => null
  return (
    <button className={styles.button} onClick={() => handler()} disabled={disabled}>
      {buttonText}
    </button>
  )
}

export default ActionButton
