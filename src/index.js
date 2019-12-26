import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import { createStore } from "redux"
import reducer from "./reducers/index"
import "./i18n"
import App from "./components/app/App"
import './global.css'

const store = createStore(reducer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root")
)
