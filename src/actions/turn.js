export const SELECT_NEXT_PLAYER = "SELECT_NEXT_PLAYER"
export const SELECT_LAST_PLAYER_PLAYED = "LAST_PLAYER_PLAYED"

export const selectNextPlayer = players => ({
  type: SELECT_NEXT_PLAYER,
  players,
})

export const selectLastPlayerPlayed = player => ({
  type: SELECT_LAST_PLAYER_PLAYED,
  player,
})
