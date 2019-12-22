import React from 'react'
import './GameCreation.css'
import Title from '../title/Title'
import PlayerList from '../playerList/PlayerList'

function GameCreation() {
    return (
        <div>
            <Title/>
            <PlayerList/>
            <PlayerList/>
        </div>
      );
}

export default GameCreation