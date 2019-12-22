import React from 'react'
import Title from "../title/Title"
import TurnScore from "../turnScore/TurnScore"
import CharacterCard from "../characterCard/CharacterCard"
import TurnTimer from "../turnTimer/TurnTimer"
import ActionButton from '../actionButton/ActionButton'

function TurnView() {
	return (
		<div>
			<Title />
            <TurnScore />
            <CharacterCard />
            <TurnTimer />
            <ActionButton />
            <ActionButton />
		</div>
	)
}

export default TurnView
