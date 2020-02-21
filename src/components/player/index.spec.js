import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react"
import Player from "."

afterEach(cleanup)

describe("Player tests", () => {
  test("Player handles undefined name as argument", () => {
    const name = undefined
    const {getByText} = render(<Player name={name} />)
    expect(getByText("Unknown")).toBeTruthy()
  })

  test("Player handles a name as argument", () => {
    const name = "Jesus"
    const {container, getByText} = render(<Player name={name} />)
    expect(container.firstChild).toBeTruthy()
    expect(getByText("Jesus")).toBeTruthy()
  })

  test("Player handles click on remove button", () => {
    const name = "Jesus"
    const removePlayer = jest.fn()
    render(<Player name={name} onRemovePlayer={removePlayer} />)
    const button = document.querySelector("button")
    fireEvent.click(button)

    expect(removePlayer.mock.calls.length).toBe(1)
  })

  test("renders snapshot", () => {
    const {asFragment} = render(<Player name="Jesus" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
