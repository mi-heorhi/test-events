import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Match, Link } from "react-router-dom";
import Protected from "./Protected";
import DataWrapper from "./DataWrapper";

@DataWrapper
@observer
export default class SubPage extends Component {
  constructor(props) {
    super(props);
    this.store = this.props.store;
  }
  render() {
    const { items, page, take } = this.store.appState;
    return (
      <div className="page events">
        <h1>Events</h1>
        <p className="subheader">Events from mock data:</p>
        <hr />
        <nav>
          <Link to={`/events/${page - 1}`} className={page === 1 ? "disabled-link" : ""}>Prev</Link>
          <div>{page}</div>
          <Link to={`/events/${page + 1}`}>Next</Link>
        </nav>
        <ul>
          {items && items.length
            ? items.map(event => {
                return (
                  <li key={event.id}>
                    <Link to={`/event/${event.id}`}>
                      <h2>{event.event_name}</h2>
                      <h1>{event.data}</h1>
                    </Link>
                  </li>
                );
              })
            : "Loading..."}
        </ul>
      </div>
    );
  }
}
