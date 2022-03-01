import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(iplData) {
    super(iplData);
    console.log(iplData.props);
    // const iplYear = iplData.props.map((item) => item.year == 2015);
    let iplWin = iplData.props.filter((item) => item.year == "2015");
    iplWin = iplWin.map((item) => item.matches_win);
    let iplTeams = iplData.props.filter((item) => item.year == "2015");
    iplTeams = iplTeams.map((item) => item.team);
    // console.log("ipl year", iplYear);
    console.log("ipl Extra Run", iplWin);
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
          data: iplWin,
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
