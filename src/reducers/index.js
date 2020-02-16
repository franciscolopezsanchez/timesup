import {combineReducers} from "redux"
import players from "./player"
import settings from "./setting"
import game from "./game"

export default combineReducers({
  players,
  settings,
  game,
})
