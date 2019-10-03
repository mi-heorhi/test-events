import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Home extends Component {
	constructor(props) {
		super(props);
		this.store = this.props.store;
	}

	render() {
		const store = this.store;
		return (
			<div className="page home">
				<header>
					<div className="hero-unit">
						<div className="react-logo" />
						<h1>Events</h1>
					</div>
					<div className="hero-subunit">
						<h4>
							Sample events app
						</h4>
					</div>
				</header>
				<main>
					<div className="section-header">
						<h3>Sample events app</h3>
						<hr />
					</div>
				</main>
			</div>
		);
	}
}
