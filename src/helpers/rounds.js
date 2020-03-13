function CreateRoundsRandomizingCharacters(characters) {
  const round = []

  if (!characters) return round

  const shuffledCharacters = shuffle(characters)
  for (let j = 0; j < shuffledCharacters.length; ++j) {
    round.push(shuffledCharacters[j])
  }

  return round
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export default CreateRoundsRandomizingCharacters
