import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

class BarChart extends Component {
  state = {
    chartData: {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
      datasets: [
        {
          label: "Unidad de medida",
          data: [213, 411, 111, 154, 123, 201, 111, 122],
          backgroundColor: [
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)",
            "rgba(120,120,255,0.6)"
          ]
        }
      ]
    }
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: true,
              text: "Sensor 2",
              fontSize: 25
            },
            legend: { display: true, position: "bottom" }
          }}
        />
      </div>
    );
  }
}

export default BarChart;
