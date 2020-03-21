import React from "react"
import {render, cleanup} from "@testing-library/react"
import PlayerList from "."

afterEach(cleanup)

describe("PlayerList tests", () => {
  test("PlayerList handles undefined argument", () => {
    const players = undefined
    const {container} = render(<PlayerList players={players} />)
    expect(container.firstChild).toBeFalsy()
  })

  test("PlayerList handles empty list of players as argument", () => {
    const players = []
    const {container, getByText} = render(
      <PlayerList players={players} teamName="nombre" />
    )
    const header = getByText(/nombre/i)
    expect(container).toBeTruthy()
    expect(header).toBeTruthy()
    expect(document.querySelector(".player")).toBeFalsy()
  })

  test("PlayerList handles a list of players as argument", () => {
    const players = [
      {name: "jesus", team: 0},
      {name: "rocio", team: 0},
      {name: "cris", team: 1},
      {name: "curro", team: 1},
    ]
    const {container, getByText} = render(
      <PlayerList players={players} teamName="nombre" />
    )
    const header = getByText(/nombre/i)
    expect(container).toBeTruthy()
    expect(header).toBeTruthy()
    expect(document.querySelector(".player")).toBeTruthy()
  })

  test("PlayerList handles no teamName as argument", () => {
    const players = []
    const {container} = render(<PlayerList players={players} />)
    const header = container.querySelector("h3")
    expect(container).toBeTruthy()
    expect(header).toBeFalsy()
  })

  test("PlayerList handles an empty teamName as argument", () => {
    const players = []
    const {container} = render(<PlayerList players={players} teamName="" />)
    const header = container.querySelector("h3")
    expect(container).toBeTruthy()
    expect(header).toBeFalsy()
  })
})
