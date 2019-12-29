import React from "react"
import PropTypes from 'prop-types';
import styles from "./ActionButton.module.css"

function Button({children, onClick = () => null}) {
	return (
		<button className={styles.button} onClick={onClick}>{children}</button>
	)
}

ActionButton.propTypes = {
	onClick: PropTypes.func
};

export default ActionButton
