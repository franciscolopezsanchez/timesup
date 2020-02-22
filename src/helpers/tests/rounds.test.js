import CreateRoundsRandomizingCharacters from "../rounds"

describe("CreateRoundsRandomizingCharacters tests", () => {
  test("handles empty argument", () => {
    var rounds = CreateRoundsRandomizingCharacters()
    expect(rounds.length).toBe(0)
  })

  test("handles no characters as argument", () => {
    var rounds = CreateRoundsRandomizingCharacters(3)
    expect(rounds.length).toBe(0)
  })

  test("returns number of rounds requested", () => {
    const characters = ["donald", "mickey", "pluto"]
    const numberOfRounds = 3
    var rounds = CreateRoundsRandomizingCharacters(numberOfRounds, characters)

    expect(rounds.length).toBe(3)
    for (let i = 0; i < numberOfRounds; i++) {
      expect(rounds[i].every(v => characters.includes(v.character))).toBe(true)
    }
  })
})
