export const CREATE_PLAYER = "CREATE_PLAYER"
export const REMOVE_PLAYER = "REMOVE_PLAYER"

export const createPlayer = (player_name, team_id, team_name) => ({
  type: CREATE_PLAYER,
  player_name,
  team_id,
  team_name,
})

export const removePlayer = (player_name, team_id) => ({
  type: REMOVE_PLAYER,
  player_name,
  team_id,
})
