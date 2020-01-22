import React from "react"
import {render, cleanup} from "@testing-library/react"
import ActionButton from "."

afterEach(cleanup)

describe("ActionButton tests", () => {
  test("ActionButton handles undefined text as argument", () => {
    // Arrange
    const buttonText = undefined
    // Act
    const {container} = render(<ActionButton buttonText={buttonText} />)
    // Assert
    expect(container.firstChild).toBeFalsy()
  })

  test("renders snapshot", () => {
    // Arrange

    // Act
    const {asFragment} = render(<ActionButton buttonText="Jesus" />)
    //Assert
    expect(asFragment()).toMatchSnapshot()
  })
})
