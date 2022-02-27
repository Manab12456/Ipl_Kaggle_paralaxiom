import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(iplData) {
    super(iplData);
    console.log(iplData.props);
    // const iplYear = iplData.props.map((item) => item.year == 2008);
    let iplPlayed = iplData.props.filter((item) => item.year == "2008");
    iplPlayed = iplPlayed.map((item) => item.matches_played);
    let iplTeams = iplData.props.filter((item) => item.year == "2008");
    iplTeams = iplTeams.map((item) => item.team);
    // console.log("ipl year", iplYear);
    console.log("ipl Extra Run", iplPlayed);
    console.log("ipl Teams", iplTeams);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: iplTeams,
        },
      },
      series: [
        {
          name: "Win",
          data: iplPlayed,
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Graph;
