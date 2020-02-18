import React, {useState} from "react"

function PlayerInput({teamId, createPlayer}) {
  const [player, setPlayer] = useState("")
  if (isNaN(teamId)) return null
  return (
    <div>
      <input
        type="text"
        value={player}
        onChange={e => setPlayer(e.target.value)}
        onBlur={() => {
          if (player) createPlayer(player, teamId)
          setPlayer("")
        }}
      />
    </div>
  )
}

export default PlayerInput
