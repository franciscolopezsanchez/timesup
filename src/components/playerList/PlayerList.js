import React from 'react'
import './PlayerList.css'
import PlayerInput from '../playerInput/PlayerInput'
import Player from '../player/Player'

function PlayerList() {

    return (
        <div>
            <h3>Equipo Azul</h3>
            <ul>
                <li><Player/></li>
                <li><PlayerInput/></li>
            </ul>
        </div>
      )
}

export default PlayerList