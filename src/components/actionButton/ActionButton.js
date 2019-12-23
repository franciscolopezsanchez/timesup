import React from "react"
import styles from "./ActionButton.module.scss"

function ActionButton({buttonText, handler}) {
	if (!buttonText) return null
	return (
		<div className={styles.actionButton}>
			<button onClick={() => handler()}>{buttonText}</button>
		</div>
	)
}

export default ActionButton
