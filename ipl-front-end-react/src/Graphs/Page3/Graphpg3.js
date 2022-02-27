import React, { Component } from "react";
import Chart from "react-apexcharts";

class Graph extends Component {
  constructor(iplData) {
    super(iplData);
    // console.log(iplData.props);
    const iplBowler = iplData.props.map((item) => item.bowler);
    const iplRunRate = iplData.props.map((item) => item.rate_run_vs_over);
    // console.log("ipl year", iplBowler);
    // console.log("ipl Match", iplRunRate);
    this.state = {
      options: {
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: iplBowler,
        },
      },
      series: [
        {
          name: "Matches ",
          data: iplRunRate,
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
