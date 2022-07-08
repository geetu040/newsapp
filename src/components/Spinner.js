import React, { Component } from "react"
import logo from "./loading.gif"

export default class Spinner extends Component {
	render() {
		return (
			<div className="text-center">
				<img width={"7%"} src={logo} alt="Loading ..." />
			</div>
		)
	}
}