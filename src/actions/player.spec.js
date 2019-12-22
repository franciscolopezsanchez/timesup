import { CREATE_PLAYER, REMOVE_PLAYER } from "./player"
import * as actions from "./player"

describe("player actions", () => {
  it("should create an action to create a player", () => {
    const expectedAction = {
      type: CREATE_PLAYER,
      player_name: "jesus",
      team_name: "equipo azul"
    }
    expect(actions.createPlayer("jesus", "equipo azul")).toEqual(expectedAction)
  })
  it("should create an action to remove a player", () => {
    const expectedAction = {
      type: REMOVE_PLAYER,
      player_name: "jesus",
      team_name: "equipo azul"
    }
    expect(actions.removePlayer("jesus", "equipo azul")).toEqual(expectedAction)
  })
})
