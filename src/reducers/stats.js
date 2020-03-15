import {RIGHT_ANSWER, INITIATE_ROUND_STATS, RESET_STATS} from "../actions/stats"

const initialState = {
  players: [],
}

const stats = (state = initialState, action) => {
  switch (action.type) {
    case INITIATE_ROUND_STATS:
      const players = action.players
      const playersStats = []
      for (let i = 0; i < players.length; i++) {
        playersStats[i] = {
          player: players[i].name,
          team: players[i].team,
          team_name: players[i].team_name,
          rightAnswers: 0,
        }
      }
      state.players.push(playersStats)
      return {...state, players: state.players}

    case RIGHT_ANSWER:
      const playerName = action.playerName
      const actualRound = state.players.length - 1

      state.players[actualRound].find(player => player.player === playerName)
        .rightAnswers++
      return {...state, players: state.players}

    case RESET_STATS:
      return {...state, players: []}

    default:
      return state
  }
}

export default stats

export const getRightAnswersPerPlayer = (state, playerName) => {
  const lastRound = state.stats.players.length - 1
  return state.stats.players[lastRound].find(player => player.player === playerName)
    .rightAnswers
}

export const getTeamStats = (state, team_id, round) => {
  return (
    state.stats.players[round - 1] &&
    state.stats.players[round - 1].filter(player => player.team === team_id)
  )
}

export const getTotalScore = (state, team_id, round) => {
  let totalScore = 0
  state.stats.players[round - 1] &&
  state.stats.players[round - 1].map(player => {
    if(player.team === team_id){
      totalScore += player.rightAnswers
    }
  })
  return totalScore
}

export const getTeamName = (state, team_id) => {
  const lastRound = state.stats.players.length - 1

  const player =
    state.stats.players[lastRound] &&
    state.stats.players[lastRound].find(player => player.team === team_id)
  return player && player.team_name
}

export const getWinnerTeam = (state) => {
  const numOfRounds = state.stats.players.length
  console.log(numOfRounds)
  let teamAScore = 0
  let teamBScore = 0
  for (let round = 0; round < numOfRounds; round++) {
    teamAScore += getTotalScore(state, 0, round)
    teamBScore += getTotalScore(state, 1, round)
  }
  console.log(teamAScore)
  console.log(teamBScore)
  return teamAScore > teamBScore ? getTeamName(state, 0) : getTeamName(state, 1)
}
