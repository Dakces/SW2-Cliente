import React, { Component } from "react";
import LineChart from "../components/LineChart";
import axios from "axios";
import Grid from "@material-ui/core/Grid";

class room extends Component {
  state = {
    room: null
  };
  componentDidMount() {
    const roomId = this.props.match.params.roomId;

    axios
      .get(`/rooms/${roomId}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({
          room: res.data.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let sensors = this.state.room ? (
      <Grid item xs={6}>
        <LineChart sensor={this.state.room} />
      </Grid>
    ) : (
      //   this.state.room.sensors.map(sensor => (
      //     <Grid item xs={6}>
      //       <LineChart sensor={sensor} />
      //     </Grid>
      //   ))
      <p>Loading ...</p>
    );

    return (
      <div>
        <h1>Room Page</h1>
        <Grid container spacing={1}>
          <Grid container justify="center" item xs={12} spacing={5}>
            {sensors}
          </Grid>
        </Grid>
      </div>
    );
    // let sensors = this.state.room ? (
    //   this.state.room.sensors.map(sensor => {
    //     if (sensor.sensorName === "LM35") {
    //       return (
    //         <Grid item xs={6}>
    //           <LineChart room={sensor} />
    //         </Grid>
    //       );
    //     } else {
    //       return (
    //         <Grid item xs={6}>
    //           <BarChart room={sensor} />
    //         </Grid>
    //       );
    //     }
    //   })
    // ) : (
    //   <p>Loading ...</p>
    // );
    // return (
    //   <div>
    //     <h1>Room Page</h1>
    //     <Grid container spacing={1}>
    //       <Grid container justify="center" item xs={12} spacing={5}>
    //         {{ sensors }}
    //       </Grid>
    //     </Grid>
    //   </div>
    // );
  }
}

export default room;
