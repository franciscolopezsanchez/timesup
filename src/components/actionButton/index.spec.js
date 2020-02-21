import React from "react"
import {render, cleanup} from "@testing-library/react"
import ActionButton from "."

afterEach(cleanup)

describe("ActionButton tests", () => {
  test("ActionButton handles undefined text as argument", () => {
    const buttonText = undefined
    const {container} = render(<ActionButton buttonText={buttonText} />)
    expect(container.firstChild).toBeFalsy()
  })

  test("renders snapshot", () => {
    const {asFragment} = render(<ActionButton buttonText="Jesus" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
