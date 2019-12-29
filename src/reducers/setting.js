import { SET_SETTING } from "../actions/setting"

const initialState = {
  settings: []
}

const settings = (state = initialState, action) => {
  switch (action.type) {
    case SET_SETTING:
      return {
            ...state,
            settings:
                state.settings.filter(setting => setting.id === action.id).length === 0 
                    ? [...state.settings,{id: action.id, value: action.value}]
                    : [...state.settings.filter(setting => setting.id !== action.id), {id: action.id, value: action.value}]
        }
    default:
      return state
  }
}
export default settings
