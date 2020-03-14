export const START_NEW_ROUND = "START_NEW_ROUND"
export const FINISH_ROUND = "FINISH_ROUND"

export const startNewRound = () => ({
  type: START_NEW_ROUND,
})

export const finishRound = () => ({
  type: FINISH_ROUND,
})
