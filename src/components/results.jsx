import React, { Component } from "react";

class Results extends Component {
  state = {};
  render() {
    const { data } = this.props;
    return (
      <div className="results">
        <table className="results-table">
          <thead>
            <th className="col-1">IP address</th>
            <th className="col-1">Location</th>
            <th className="col-1">Timezone</th>
            <th className="col-1">ISP</th>
          </thead>
          <tbody>
            {
              (data,
              data.location && (
                <tr>
                  <td className="col-1">{data.ip}</td>
                  <td className="col-1">
                    {data.location.city}, {data.location.country}
                  </td>
                  <td className="col-1">UTC {data.location.timezone}</td>
                  <td className="col-1">{data.isp}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Results;
