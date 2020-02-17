import CHARACTERS from "../data/CharactersData"

function GetRandomCharacters(numberOfCharacters) {
  let randomPositions = GenerateRandomPositions(numberOfCharacters, CHARACTERS.length)
  let characters = []
  for (let i = randomPositions.length - 1; i >= 0; --i) {
    let characterIndex = randomPositions[i]
    characters.push(CHARACTERS[characterIndex])
  }
  return characters
}

function GenerateRandomPositions(numberOfPositions, maxNumber) {
  let randomPositions = []
  if (numberOfPositions > maxNumber) numberOfPositions = maxNumber

  while (numberOfPositions) {
    let x = Math.floor(Math.random() * maxNumber)
    if (randomPositions.filter(number => number === x).length === 0) {
      randomPositions.push(x)
      numberOfPositions--
    }
  }
  return randomPositions
}

export default GetRandomCharacters
