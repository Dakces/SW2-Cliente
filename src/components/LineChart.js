import React, { Component } from "react";
import { Line } from "react-chartjs-2";

class LineChart extends Component {
  state = {
    chartData: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      datasets: [
        {
          label: "Unidad de medida",
          data: [213, 411, 111, 154, 213, 411, 111, 154, 213, 411, 111, 154],
          backgroundColor: [
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)",
            "rgba(255,99,132,0.6)"
          ]
        }
      ]
    }
  };

  render() {
    return (
      <div className="chart">
        <Line
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Sensor 1",
              fontSize: 25
            },
            legend: { display: true, position: "bottom" }
          }}
        />
      </div>
    );
  }
}

export default LineChart;
