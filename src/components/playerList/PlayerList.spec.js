import React from "react"
import { render, cleanup } from "@testing-library/react"
import PlayerList from "./PlayerList"

afterEach(cleanup)

describe("PlayerList tests", () => {
	test("PlayerList handles undefined argument", () => {
		// Arrange
		const players = undefined
		// Act
		const { container } = render(<PlayerList players={players} />)
		// Assert
		expect(container.firstChild).toBeFalsy()
	})

	test("PlayerList handles empty list of players as argument", () => {
		// Arrange
		const players = []
		// Act
		const { container, getByText } = render(
			<PlayerList players={players} teamName="nombre" />
		)
		const header = getByText(/nombre/i)
		// Assert
		expect(container).toBeTruthy()
		expect(header).toBeTruthy()
		expect(document.querySelector(".player")).toBeFalsy()
	})

	test("PlayerList handles a list of players as argument", () => {
		// Arrange
		const players = [
			{ name: "jesus", team: 0 },
			{ name: "rocio", team: 0 },
			{ name: "cris", team: 1 },
			{ name: "curro", team: 1 }
		]
		// Act
		const { container, getByText } = render(
			<PlayerList players={players} teamName="nombre" />
		)
		const header = getByText(/nombre/i)
		// Assert
		expect(container).toBeTruthy()
		expect(header).toBeTruthy()
		expect(document.querySelector(".player")).toBeTruthy()
	})

	test("PlayerList handles no teamName as argument", () => {
		// Arrange
		const players = []
		// Act
		const { container, getByText } = render(
			<PlayerList players={players} />
		)
		const header = container.querySelector("h3")
		// Assert
		expect(container).toBeTruthy()
		expect(header).toBeFalsy()
	})

	test("PlayerList handles an empty teamName as argument", () => {
		// Arrange
		const players = []
		// Act
		const { container, getByText } = render(
			<PlayerList players={players} teamName="" />
		)
		const header = container.querySelector("h3")
		// Assert
		expect(container).toBeTruthy()
		expect(header).toBeFalsy()
	})

	test("renders snapshot", () => {
		// Arrange
		const players = [
			{ name: "jesus", team: 0 },
			{ name: "rocio", team: 0 },
			{ name: "cris", team: 1 },
			{ name: "curro", team: 1 }
		]
		// Act
		const { asFragment } = render(<PlayerList players={players} />)
		//Assert
		expect(asFragment()).toMatchSnapshot()
	})
})
