import {combineReducers} from "redux"
import players from "./player"
import settings from "./setting"
import game from "./game"
import characters from "./characters"
import rounds from "./rounds"
import stats from "./stats"

export default combineReducers({
  players,
  settings,
  game,
  characters,
  rounds,
  stats,
})
