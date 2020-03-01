import CreateRoundsRandomizingCharacters from "../rounds"

describe("CreateRoundsRandomizingCharacters tests", () => {
  test("handles empty argument", () => {
    var round = CreateRoundsRandomizingCharacters()
    expect(round.length).toBe(0)
  })

  test("returns shuffled characters", () => {
    const characters = ["donald", "mickey", "pluto"]
    var round = CreateRoundsRandomizingCharacters(characters)

    expect(round.every(char => characters.includes(char))).toBe(true)
  })
})
