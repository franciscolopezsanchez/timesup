import {cleanup} from "@testing-library/react"
import GetRandomCharacters from "../characters"
import CHARACTERS from "../../data/charactersData"

afterEach(cleanup)

describe("GetRandomCharacters tests", () => {
  test("GetRandomCharacters handles empty argument", () => {
    var characters = GetRandomCharacters()
    expect(characters.length).toBe(0)
  })
  test("GetRandomCharacters handles 0 as argument", () => {
    var characters = GetRandomCharacters(0)
    expect(characters.length).toBe(0)
  })
  test("GetRandomCharacters handles a number as argument", () => {
    var characters = GetRandomCharacters(6)
    expect(characters.length).toBe(6)
  })
  test("GetRandomCharacters handles a number as argument which is bigger than characters available", () => {
    var numOfCharacters = CHARACTERS.length
    var characters = GetRandomCharacters(numOfCharacters + 1)
    expect(characters.length).toBe(numOfCharacters)
  })
})
