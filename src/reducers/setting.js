import {SET_SETTING} from "../actions/setting"
import {CHARACTERS_PER_PLAYER, SECONDS_PER_TURN} from "../config-files/settings-config"

const initialState = {
  settings: [],
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTING:
      return {
        ...state,
        settings:
          state.settings.filter(setting => setting.id === action.payload.id).length === 0
            ? [...state.settings, {id: action.payload.id, value: action.payload.value}]
            : [
                ...state.settings.map(setting =>
                  setting.id === action.payload.id
                    ? {id: action.payload.id, value: parseInt(action.payload.value)}
                    : setting
                ),
              ],
      }
    default:
      return state
  }
}
export default settings

export const getCharactersPerPlayer = state => {
  const setting = state.settings.settings.find(setting => {
    return setting.id === CHARACTERS_PER_PLAYER
  })
  return setting ? setting.value : null
}

export const getSecondsPerTurn = state => {
  const setting = state.settings.settings.find(setting => {
    return setting.id === SECONDS_PER_TURN
  })
  return setting.value
}
