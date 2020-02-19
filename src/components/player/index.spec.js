import React from "react"
import {render, cleanup, fireEvent} from "@testing-library/react"
import Player from "."

afterEach(cleanup)

describe("Player tests", () => {
  test("Player handles undefined name as argument", () => {
    // Arrange
    const name = undefined
    // Act
    const {getByText} = render(<Player name={name} />)
    // Assert
    expect(getByText("Unknown")).toBeTruthy()
  })

  test("Player handles a name as argument", () => {
    // Arrange
    const name = "Jesus"
    // Act
    const {container, getByText} = render(<Player name={name} />)
    // Assert
    expect(container.firstChild).toBeTruthy()
    expect(getByText("Jesus")).toBeTruthy()
  })

  test("Player handles click on remove button", () => {
    // Arrange
    const name = "Jesus"
    const removePlayer = jest.fn()
    // Act
    render(<Player name={name} onRemovePlayer={removePlayer} />)
    const button = document.querySelector("button")
    fireEvent.click(button)

    // Assert
    expect(removePlayer.mock.calls.length).toBe(1)
  })

  test("renders snapshot", () => {
    // Arrange

    // Act
    const {asFragment} = render(<Player name="Jesus" />)
    //Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
