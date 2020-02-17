import {SELECT_CHARACTERS} from "../actions/characters"

const initialState = {
  characters: [],
}

const characters = (state = initialState, {type, payload}) => {
  switch (type) {
    case SELECT_CHARACTERS:
      return {...state, characters: ["char1"]}

    default:
      return state
  }
}

export default characters
