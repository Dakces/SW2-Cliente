import React, { Component } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class BarChart extends Component {
  state = {
    chartData: {
      labels: ["Sensor1", "Sensor2", "Sensor3", "Sensor4"],
      datasets: [
        {
          label: "Unidad de medida",
          data: [213, 411, 111, 154],
          backgroundColor: [
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
        <Bar
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

export default BarChart;
