import React from "react"
import ReactDOM from "react-dom"
import {Provider} from "react-redux"
import {createStore} from "redux"
import reducer from "./reducers/index"
import "./i18n"
import App from "./components/app"
import "minireset.css"
import "./styles/global.scss"

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
