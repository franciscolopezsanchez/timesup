export const CREATE_ROUNDS = "CREATE_ROUNDS"

export const createRounds = (numberOfRounds, characters) => ({
  type: CREATE_ROUNDS,
  numberOfRounds,
  characters,
})
