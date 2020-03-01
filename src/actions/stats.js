export const RIGHT_ANSWER = "RIGHT_ANSWERT"
export const INITIATE_ROUND_STATS = "INITIATE_ROUND_STATS"

export const rightAnswer = playerName => ({
  type: RIGHT_ANSWER,
  playerName,
})

export const initiateRoundStats = (rounds, players) => ({
  type: INITIATE_ROUND_STATS,
  rounds,
  players,
})
