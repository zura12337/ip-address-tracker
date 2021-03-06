import React, { Component } from "react";
import Header from "./components/header";
import Results from "./components/results";
import axios from "axios";
import { toast } from "react-toastify";
import L from "leaflet";
import { Map, TileLayer, Marker } from "react-leaflet";
import Loading from "./components/common/loading";

var myIcon = L.icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  iconSize: [25, 41],
  iconAnchor: [12.5, 41],
  popupAnchor: [0, -41],
});

class App extends Component {
  state = { ipAddress: "", data: {}, lat: 0, lng: 0, zoom: 2, loading: false };

  handleChange = (e) => {
    this.setState({ ipAddress: e.target.value });
  };
  onSubmit = () => {
    this.setState({ loading: true }, async () => {
      try {
        const { data } = await axios.get(
          "https://geo.ipify.org/api/v1?apiKey=at_mmHB8KrhJdOPXm1urLb0h1GpJgmnj&ipAddress=" +
            this.state.ipAddress
        );
        this.setState({
          lat: data.location.lat,
          lng: data.location.lng,
          zoom: 8,
        });
        this.setState({ data, loading: false });
      } catch (ex) {
        toast.error(ex.response.data.messages);
        this.setState({ loading: false });
      }
    });
  };
  getMapData() {
    return [this.state.lat, this.state.lng];
  }

  render() {
    const { ipAddress, data, zoom, loading } = this.state;
    const { handleChange, onSubmit } = this;
    const position = this.getMapData();
    return (
      <div>
        <Header
          ipAddress={ipAddress}
          onChange={handleChange}
          onSubmit={onSubmit}
        />
        <Results data={data} />
        <Map className="map" center={position} zoom={zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}></Marker>
        </Map>
        {loading && <Loading />}
      </div>
    );
  }
}

export default App;
