import React from "react"
import PropTypes from 'prop-types';

function Player({ name, removePlayer }) {
	if (!name) return null
	return (
		<div className="player">
			<span>{name}</span>
			<button onClick={() => removePlayer(name)}>X</button>
		</div>
	)
}

Player.propTypes = {
	name: PropTypes.string,
	removePlayer: PropTypes.func
};

export default Player
