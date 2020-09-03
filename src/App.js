import React, { Component } from "react";
import Header from "./components/header";
import Results from "./components/results";
import axios from "axios";
import { toast } from "react-toastify";

class App extends Component {
  state = { ipAddress: "", data: {} };

  handleChange = (e) => {
    this.setState({ ipAddress: e.target.value });
  };
  onSubmit = async (e) => {
    try {
      const { data } = await axios.get(
        "https://geo.ipify.org/api/v1?apiKey=at_mmHB8KrhJdOPXm1urLb0h1GpJgmnj&ipAddress=" +
          e.target[0].value
      );
      this.setState({ data });
    } catch (ex) {
      console.log(ex.response);
      toast.error(ex.response.data.messages);
    }
  };

  render() {
    const { ipAddress, data } = this.state;
    const { handleChange, onSubmit } = this;
    return (
      <div>
        <Header
          ipAddress={ipAddress}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <Results data={data} />
      </div>
    );
  }
}

export default App;
