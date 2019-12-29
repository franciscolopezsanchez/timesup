import { combineReducers } from "redux"
import players from "./player"
import settings from "./setting"

export default combineReducers({
	players,
	settings
})
