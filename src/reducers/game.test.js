import {getNumberOfRounds} from "./game"

describe("game reducer", () => {
  it("getNumberOfRounds should return total number of Rounds defined", () => {
    const initialState = {
      numberOfRounds: 3,
    }
    const numberOfRounds = getNumberOfRounds(initialState)
    expect(numberOfRounds).toEqual(3)
  })
})
