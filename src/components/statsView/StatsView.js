import React from 'react'
import Title from "../title/Title"
import TeamScore from "../teamScore/TeamScore"
import ActionButton from '../actionButton/ActionButton'

function StatsView() {
	return (
		<div>
			<Title />
            <TeamScore />
            <TeamScore />
            <ActionButton />
		</div>
	)
}

export default StatsView
