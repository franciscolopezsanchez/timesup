import players from "./player"
import { cleanup } from "@testing-library/react"

describe("films reducer", () => {
  afterEach(cleanup)

  it("should handle CREATE_PLAYER", () => {
    expect(
      players(
        { players: [] },
        {
          type: "CREATE_PLAYER",
          player_name: "Jesus",
          team_id: 1
        }
      )
    ).toEqual({ players: [{ name: "Jesus", team: 1 }] })
  })

  it("should handle CREATE_PLAYER when player exists", () => {
    expect(
      players(
        { players: [{ name: "Jesus", team: 1 }] },
        {
          type: "CREATE_PLAYER",
          player_name: "Jesus",
          team_id: 1
        }
      )
    ).toEqual({ players: [{ name: "Jesus", team: 1 }] })
  })

  it("should handle REMOVE_PLAYER", () => {
    expect(
      players(
        { players: [{ name: "Jesus", team: 1 }] },
        {
          type: "REMOVE_PLAYER",
          player_name: "Jesus"
        }
      )
    ).toEqual({ players: [] })
  })
})
