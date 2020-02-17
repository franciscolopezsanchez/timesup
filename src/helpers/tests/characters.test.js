import {cleanup} from "@testing-library/react"
import GetRandomCharacters from "../characters"
import CHARACTERS from "../../data/charactersData"

afterEach(cleanup)

describe("GetRandomCharacters tests", () => {
  test("GetRandomCharacters handles empty argument", () => {
    // Arrange
    // Act
    var characters = GetRandomCharacters()
    // Assert
    expect(characters.length).toBe(0)
  })
  test("GetRandomCharacters handles 0 as argument", () => {
    // Arrange
    // Act
    var characters = GetRandomCharacters(0)
    // Assert
    expect(characters.length).toBe(0)
  })
  test("GetRandomCharacters handles a number as argument", () => {
    // Arrange
    // Act
    var characters = GetRandomCharacters(6)
    // Assert
    expect(characters.length).toBe(6)
  })
  test("GetRandomCharacters handles a number as argument which is bigger than characters available", () => {
    // Arrange
    var numOfCharacters = CHARACTERS.length
    // Act
    var characters = GetRandomCharacters(numOfCharacters + 1)
    // Assert
    expect(characters.length).toBe(numOfCharacters)
  })
})
