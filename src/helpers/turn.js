function GetNextPlayer(players, lastPlayerPlayed) {
  if (!players) return null
  if (!lastPlayerPlayed) return players[0]

  const teamToPlay = players.filter(player => player.team === lastPlayerPlayed.team)

  console.log(teamToPlay)
  const indexOfLastPlayerPlayed = teamToPlay
    .map(player => {
      return player.name
    })
    .indexOf(lastPlayerPlayed.name)

  const indexOfNextPlayerToPlay = (indexOfLastPlayerPlayed + 1) % teamToPlay.length

  return teamToPlay[indexOfNextPlayerToPlay]
}

export default GetNextPlayer
