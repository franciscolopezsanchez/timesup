import React from 'react'
import './GameCreation.css'
import Title from '../title/Title'
import PlayerList from '../playerList/PlayerList'
import ActionButton from '../actionButton/ActionButton'

function GameCreation() {
    return (
        <div>
            <Title/>
            <PlayerList/>
            <PlayerList/>
            <ActionButton/>
        </div>
      );
}

export default GameCreation