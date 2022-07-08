import React, { Component } from 'react'
import {
    Link
} from "react-router-dom";

export default class Navbar extends Component {
	render() {
		return (<>
			<nav className="fixed-top navbar navbar-dark navbar-expand-lg bg-dark">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/">News</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							{this.props.categories.map((category)=>{ return (
								<li key={category} className="nav-item"> <Link className="nav-link" aria-current="page" to={category}>
									{category.charAt(0).toUpperCase() + category.slice(1)}
								</Link> </li>
							)})}
						</ul>
					</div>
				</div>
			</nav>
		</>)
	}
}