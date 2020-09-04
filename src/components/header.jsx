import React, { Component } from "react";

class Header extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.onSubmit(e);
  };
  render() {
    return (
      <div className="header">
        <h1 className="text-center">IP Address Tracker</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Search for any IP Address or Domain"
            id="ip-input"
            value={this.props.ipAddress}
            onChange={this.props.onChange}
          />
          <button type="submit" id="ip-submit">
            <img src={require("../images/icon-arrow.svg")} alt=">" />
          </button>
        </form>
      </div>
    );
  }
}

export default Header;
