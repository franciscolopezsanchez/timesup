function CreateRoundsRandomizingCharacters(numberOfRounds, characters) {
  const rounds = []

  for (let i = 0; i < numberOfRounds; ++i) {
    const round = []
    characters = shuffle(characters)
    for (let j = 0; j < characters.length; ++j) {
      round.push({character: characters[j], player: ""})
    }
    rounds.push(round)
  }

  return rounds
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export default CreateRoundsRandomizingCharacters
