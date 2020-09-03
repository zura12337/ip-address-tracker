import React, { Component } from "react";

class Header extends Component {
  state = {
    ipAddress: "",
  };

  handleChange = (e) => {
    this.setState({ ipAddress: e.target.value });
  };
  render() {
    return (
      <div className="header">
        <h1 className="text-center">IP Address Tracker</h1>
        <form>
          <input
            type="text"
            placeholder="Search for any IP Address or Domain"
            id="ip-input"
            value={this.state.ipAddress}
            onChange={this.handleChange}
          />
          <input type="submit" value=">" id="ip-submit" />
        </form>
      </div>
    );
  }
}

export default Header;
