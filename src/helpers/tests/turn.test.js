import GetNextPlayer from "../turn"

const players = [
  {name: "jesus", team: 0},
  {name: "ro", team: 1},
]

describe("GetNextPlayer tests", () => {
  test("handles no arguments", () => {
    var player = GetNextPlayer()
    expect(player).toBe(null)
  })

  test("handles no argument: lastPlayerPlayed", () => {
    var player = GetNextPlayer(players)
    expect(player.name).toBe("jesus")
  })

  test.skip("handles no argument: lastPlayerPlayed", () => {
    var lastPlayerPlayed = {name: "ro", team: 1}
    var player = GetNextPlayer(players, lastPlayerPlayed)
    expect(player.name).toBe("jesus")
  })
})
