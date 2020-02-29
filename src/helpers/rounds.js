function CreateRoundsRandomizingCharacters(characters) {
  const round = []

  if (!characters) return round

  characters = shuffle(characters)
  for (let j = 0; j < characters.length; ++j) {
    round.push(characters[j])
  }

  return round
}

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5)
}

export default CreateRoundsRandomizingCharacters
