import {combineReducers} from "redux"
import players from "./player"
import settings from "./setting"
import game from "./game"
import characters from "./characters"

export default combineReducers({
  players,
  settings,
  game,
  characters,
})
