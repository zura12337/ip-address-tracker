import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      data,
      data.location ? (
        <div className="results">
          {/* <table className="results-table">
            <thead>
              <th className="col-1">IP address</th>
              <th className="col-1">Location</th>
              <th className="col-1">Timezone</th>
              <th className="col-1">ISP</th>
            </thead>
            <tbody>
              <tr>
                <td className="col-1">{data.ip}</td>
                <td className="col-1">
                  {data.location.city}, {data.location.country}
                </td>
                <td className="col-1">UTC {data.location.timezone}</td>
                <td className="col-1">{data.isp}</td>
              </tr>
            </tbody>
          </table> */}
          <div className="column ip-col">
            <p>IP Address</p>
            <h3>{data.ip}</h3>
          </div>
          <div className="column location-col">
            <p>Location</p>
            <h3>
              {data.location.city}, {data.location.country}
            </h3>
          </div>
          <div className="column timezone-col">
            <p>Timezone</p>
            <h3>UTC {data.location.timezone}</h3>
          </div>
          <div className="column isp-col">
            <p>ISP</p>
            <h3>{data.isp}</h3>
          </div>
        </div>
      ) : (
        <> </>
      )
    );
  }
}

export default Results;
