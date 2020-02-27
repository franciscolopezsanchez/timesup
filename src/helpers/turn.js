function GetNextPlayer(players, lastPlayerPlayed) {
  if (!players) return null
  if (!lastPlayerPlayed) return players[0]

  const numberOfTeams = getNumberOfTeams(players)
  const nextTeamToPlay = (lastPlayerPlayed.team + 1) % numberOfTeams
  const lastTeamPlayed = players.filter(player => player.team === lastPlayerPlayed.team)

  var indexOfLastPlayerPlayed = lastTeamPlayed
    .map(function(x) {
      return x.name
    })
    .indexOf(lastPlayerPlayed.name)

  let nextPlayerIndex = indexOfLastPlayerPlayed

  if (lastPlayerPlayed.team === numberOfTeams - 1) {
    nextPlayerIndex = (nextPlayerIndex + 1) % lastTeamPlayed.length
  }
  const teamToPlay = players.filter(player => player.team === nextTeamToPlay)
  return teamToPlay[nextPlayerIndex]
}

function getNumberOfTeams(players) {
  let numberOfTeams = 0
  players.forEach(player => {
    if (player.team === numberOfTeams) {
      numberOfTeams++
    }
  })
  return numberOfTeams
}
export default GetNextPlayer
