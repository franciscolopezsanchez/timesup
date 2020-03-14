export const START_NEW_ROUND = "START_NEW_ROUND"
export const FINISH_ROUND = "FINISH_ROUND"
export const RESET_GAME = "RESET_GAME"

export const startNewRound = () => ({
  type: START_NEW_ROUND,
})

export const finishRound = () => ({
  type: FINISH_ROUND,
})

export const resetGame = () => ({
  type: RESET_GAME,
})
