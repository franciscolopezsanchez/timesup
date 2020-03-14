export const SELECT_CHARACTERS = "SELECT_CHARACTERS"
export const RESET_CHARACTERS = "RESET_CHARACTERS"

export const selectCharacters = characters => ({
  type: SELECT_CHARACTERS,
  characters,
})

export const resetCharacters = () => ({
  type: RESET_CHARACTERS,
})
