import {CREATE_ROUNDS} from "../actions/rounds"

import CreateRoundsRandomizingCharacters from "../helpers/rounds"

const initialState = {
  rounds: [],
}

const rounds = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ROUNDS:
      const rounds = CreateRoundsRandomizingCharacters(
        action.numberOfRounds,
        action.characters
      )
      return {...state, rounds: rounds}

    default:
      return state
  }
}
export default rounds
