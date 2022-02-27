import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(iplData) {
    super(iplData);
    console.log(iplData.props);
    const iplTeam = iplData.props.map((item) => item.team);
    const iplWin = iplData.props.map((item) => item.total_win);
    console.log("ipl year", iplTeam);
    console.log("ipl Match", iplWin);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: iplTeam,
        },
      },
      series: [
        {
          name: "Wins ",
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
