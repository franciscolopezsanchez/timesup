import React from "react"
import styles from "./ActionButton.module.scss"

function ActionButton({buttonText}) {
	if (!buttonText) return null
	return (
		<div className={styles.actionButton}>
			<button>{buttonText}</button>
		</div>
	)
}

export default ActionButton
