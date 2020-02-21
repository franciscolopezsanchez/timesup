import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react"
import PlayerInput from "."

afterEach(cleanup)

describe("PlayerInput tests", () => {
  test("PlayerInput handles undefined teamId as argument", () => {
    const teamId = undefined
    const {container} = render(<PlayerInput teamId={teamId} />)
    expect(container.firstChild).toBeFalsy()
  })

  test("PlayerInput handles a teamId as argument", () => {
    const teamId = 0
    const {container} = render(<PlayerInput teamId={teamId} />)
    const input = document.querySelector("input")
    expect(container.firstChild).toBeTruthy()
    expect(input).toBeTruthy()
  })

  test("PlayerInput handles an input change", () => {
    const teamId = 0
    const {container} = render(<PlayerInput teamId={teamId} />)
    const input = document.querySelector("input")

    fireEvent.change(input, {target: {value: "Jesus"}})
    expect(input.value).toBe("Jesus")
  })

  test("PlayerInput call callback on blur", () => {
    const teamId = 0
    const createPlayer = jest.fn()
    const {container} = render(
      <PlayerInput teamId={teamId} createPlayer={createPlayer} />
    )
    const input = document.querySelector("input")

    fireEvent.change(input, {target: {value: "Jesus"}})
    expect(input.value).toBe("Jesus")

    fireEvent.blur(input)

    expect(createPlayer.mock.calls.length).toBe(1)
    expect(input.value).toBe("")
  })

  test("renders snapshot", () => {
    const {asFragment} = render(<PlayerInput teamId={0} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
