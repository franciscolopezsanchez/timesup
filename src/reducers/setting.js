import {SET_SETTING} from "../actions/setting"

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
