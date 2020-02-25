import GetNextPlayer from "../turn"

const players = [
  {name: "jesus", team: 0},
  {name: "ro", team: 0},
  {name: "cris", team: 1},
  {name: "curro", team: 1},
]

const threeTeams = [
  {name: "jesus", team: 0},
  {name: "ro", team: 0},
  {name: "cris", team: 1},
  {name: "curro", team: 1},
  {name: "mama", team: 2},
  {name: "papa", team: 2},
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

  test("handles teams with one player per team", () => {
    var lastPlayerPlayed = {name: "ro", team: 1}
    var player = GetNextPlayer(players, lastPlayerPlayed)
    expect(player.name).toBe("jesus")
  })

  test("returns curro after ro", () => {
    var lastPlayerPlayed = {name: "ro", team: 0}
    var player = GetNextPlayer(players, lastPlayerPlayed)
    expect(player.name).toBe("curro")
  })

  test("returns ro after cris", () => {
    var lastPlayerPlayed = {name: "cris", team: 1}
    var player = GetNextPlayer(players, lastPlayerPlayed)
    expect(player.name).toBe("ro")
  })

  test("returns jesus after curro", () => {
    var lastPlayerPlayed = {name: "curro", team: 1}
    var player = GetNextPlayer(players, lastPlayerPlayed)
    expect(player.name).toBe("jesus")
  })

  test("returns jesus after papa", () => {
    var lastPlayerPlayed = {name: "papa", team: 2}
    var player = GetNextPlayer(threeTeams, lastPlayerPlayed)
    expect(player.name).toBe("jesus")
  })
})
