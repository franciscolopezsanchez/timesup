import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import PlayerInput from "./PlayerInput"

afterEach(cleanup)

describe("PlayerInput tests", () => {
	test("PlayerInput handles undefined teamId as argument", () => {
		// Arrange
		const teamId = undefined
		// Act
		const { container } = render(<PlayerInput teamId={teamId} />)
		// Assert
		expect(container.firstChild).toBeFalsy()
	})

	test("PlayerInput handles a teamId as argument", () => {
		// Arrange
		const teamId = 0
		// Act
		const { container } = render(<PlayerInput teamId={teamId} />)
		const input = document.querySelector("input")
		// Assert
		expect(container.firstChild).toBeTruthy()
		expect(input).toBeTruthy()
	})

	test("PlayerInput handles an input change", () => {
		// Arrange
		const teamId = 0
		// Act
		const { container } = render(<PlayerInput teamId={teamId} />)
		const input = document.querySelector("input")

		fireEvent.change(input, { target: { value: "Jesus" } })
		// Assert
		expect(input.value).toBe("Jesus")
	})

	test("PlayerInput call callback on blur", () => {
		// Arrange
		const teamId = 0
		const createPlayer = jest.fn()
		// Act
		const { container } = render(
			<PlayerInput teamId={teamId} createPlayer={createPlayer} />
		)
		const input = document.querySelector("input")

		fireEvent.change(input, { target: { value: "Jesus" } })
		// Assert
		expect(input.value).toBe("Jesus")

		fireEvent.blur(input)

		expect(createPlayer.mock.calls.length).toBe(1)
		expect(input.value).toBe("")
	})

	test("renders snapshot", () => {
		// Arrange
		// Act
		const { asFragment } = render(<PlayerInput teamId={0} />)
		//Assert
		expect(asFragment()).toMatchSnapshot()
	})
})
