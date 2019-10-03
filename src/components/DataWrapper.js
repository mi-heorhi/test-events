import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from "react-router-dom";

export default function DataWrapper(WrappedComponent) {
	@inject("store")
	@observer
	class DataFetcher extends Component {
		constructor(props) {
			super(props);
			this.store = this.props.store.appState;
		}

		componentDidMount() {
			let id = this.props.match.params.id ? this.props.match.params.id : null;
			let page = this.props.match.params.page ? this.props.match.params.page : null;
			this.store.fetchData(parseInt(page), parseInt(id));
		}
		componentDidUpdate() {
			let id = this.props.match.params.id ? this.props.match.params.id : null;
			let page = this.props.match.params.page ? this.props.match.params.page : null;
			this.store.fetchData(parseInt(page), parseInt(id));
		}

		componentWillUnmount() {
			this.store.clearItems();
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	}
	return DataFetcher;
}
