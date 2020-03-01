export const CREATE_ROUNDS = "CREATE_ROUNDS"
export const SELECT_CHARACTER = "SELECT_CHARACTER"
export const REMOVE_CHARACTER = "REMOVE_CHARACTER"

export const createRounds = (numberOfRounds, characters) => ({
  type: CREATE_ROUNDS,
  numberOfRounds,
  characters,
})

export const selectCharacter = () => ({
  type: SELECT_CHARACTER,
})

export const removeCharacter = () => ({
  type: REMOVE_CHARACTER,
})
