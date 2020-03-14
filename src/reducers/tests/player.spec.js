import players, {
  getPlayersByTeam,
  getNumberOfPlayers,
  isMinNumberPlayersAllowed,
  MIN_NUMBER_PLAYERS_PER_TEAM,
} from "../player"
import {cleanup} from "@testing-library/react"

describe("player reducer", () => {
  afterEach(cleanup)

  it("should handle default case", () => {
    expect(
      players(
        {players: []},
        {
          type: null,
        }
      )
    ).toEqual({players: []})
  })

  it("should handle CREATE_PLAYER", () => {
    expect(
      players(
        {players: []},
        {
          type: "CREATE_PLAYER",
          player_name: "Jesus",
          team_id: 1,
          team_name: "name",
        }
      )
    ).toEqual({players: [{name: "Jesus", team: 1, team_name: "name"}]})
  })

  it("should handle CREATE_PLAYER when player exists", () => {
    expect(
      players(
        {players: [{name: "Jesus", team: 1}]},
        {
          type: "CREATE_PLAYER",
          player_name: "Jesus",
          team_id: 1,
        }
      )
    ).toEqual({players: [{name: "Jesus", team: 1}]})
  })

  it("should handle REMOVE_PLAYER", () => {
    expect(
      players(
        {players: [{name: "Jesus", team: 1}]},
        {
          type: "REMOVE_PLAYER",
          player_name: "Jesus",
        }
      )
    ).toEqual({players: []})
  })

  it("should handle REMOVE_PLAYER that doesn't exist", () => {
    expect(
      players(
        {players: [{name: "Jesus", team: 1}]},
        {
          type: "REMOVE_PLAYER",
          player_name: "Curro",
        }
      )
    ).toEqual({players: [{name: "Jesus", team: 1}]})
  })

  it("getPlayersByTeam should handle undefined state", () => {
    const initialState = undefined
    const players = getPlayersByTeam(initialState, 0).players
    expect(players.length).toEqual(0)
  })

  it("getPlayersByTeam should handle empty state", () => {
    const initialState = {players: []}
    const players = getPlayersByTeam(initialState, 0).players
    expect(players.length).toEqual(0)
  })

  it("getPlayersByTeam should return empty array if player is not in the team requested", () => {
    const initialState = {players: [{name: "Jesus", team: 1}]}
    const players = getPlayersByTeam(initialState, 0).players
    expect(players.length).toEqual(0)
  })

  it("getPlayersByTeam should return player if it's in the team requested", () => {
    const initialState = {players: {players: [{name: "Jesus", team: 1}]}}
    const players = getPlayersByTeam(initialState, 1)
    expect(players).toContainEqual({name: "Jesus", team: 1})
  })

  it("getNumberOfPlayers returns number of players in state: 0", () => {
    const initialState = {players: {players: []}}
    const numberOfPlayers = getNumberOfPlayers(initialState)
    expect(numberOfPlayers).toBe(0)
  })

  it("getNumberOfPlayers returns number of players in state: 1", () => {
    const initialState = {players: {players: [{name: "Jesus", team: 1}]}}
    const numberOfPlayers = getNumberOfPlayers(initialState)
    expect(numberOfPlayers).toBe(1)
  })

  describe("isMinNumberPlayersAllowed", () => {
    describe("when no players", () => {
      it("returns false", () => {
        const initialState = {players: {players: []}}

        const minNumberOfPlayerAllowed = isMinNumberPlayersAllowed(initialState)
        expect(minNumberOfPlayerAllowed).toBe(false)
      })
    })

    describe("when only one team", () => {
      it("returns false", () => {
        const initialState = {players: {players: [{name: "Jesus", team: 1}]}}

        const minNumberOfPlayerAllowed = isMinNumberPlayersAllowed(initialState)
        expect(minNumberOfPlayerAllowed).toBe(false)
      })
    })

    describe("when there are two teams", () => {
      describe(`when one team has less than ${MIN_NUMBER_PLAYERS_PER_TEAM}`, () => {
        it("returns false", () => {
          const initialState = {
            players: {
              players: [
                {name: "Jesus", team: 1},
                {name: "Curro", team: 0},
              ],
            },
          }

          const minNumberOfPlayerAllowed = isMinNumberPlayersAllowed(initialState)
          expect(minNumberOfPlayerAllowed).toBe(false)
        })
      })
      describe(`when one team has more than ${MIN_NUMBER_PLAYERS_PER_TEAM}`, () => {
        it("returns true", () => {
          const initialState = {
            players: {
              players: [
                {name: "Jesus", team: 1},
                {name: "Curro", team: 1},
              ],
            },
          }

          const minNumberOfPlayerAllowed = isMinNumberPlayersAllowed(initialState)
          expect(minNumberOfPlayerAllowed).toBe(false)
        })
      })
      describe(`when all teams have equal or more than ${MIN_NUMBER_PLAYERS_PER_TEAM}`, () => {
        it("returns true", () => {
          const initialState = {
            players: {
              players: [
                {name: "Jesus", team: 1},
                {name: "Curro", team: 0},
                {name: "Cris", team: 1},
                {name: "Roci", team: 0},
                {name: "Jesus", team: 2},
                {name: "Curro", team: 3},
                {name: "Cris", team: 2},
                {name: "Roci", team: 3},
                {name: "Jesus", team: 0},
                {name: "Curro", team: 0},
                {name: "Cris", team: 0},
                {name: "Roci", team: 3},
                {name: "Jesus", team: 3},
                {name: "Curro", team: 4},
                {name: "Cris", team: 4},
                {name: "Roci", team: 3},
              ],
            },
          }

          const minNumberOfPlayerAllowed = isMinNumberPlayersAllowed(initialState)
          expect(minNumberOfPlayerAllowed).toBe(true)
        })
        
      })
    })
  })
})
