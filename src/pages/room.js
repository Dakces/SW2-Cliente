import React, { Component } from "react";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cardContainer: {
    marginTop: "120px"
  },
  table: {
    minWidth: 650,
    marginTop: "60px"
  }
});

class room extends Component {
  state = {
    room: null,
    sensors: [
      { sensorId: 1, name: "LM35", unit: "Celcius" },
      { sensorId: 2, name: "MT01", unit: "Watts" },
      { sensorId: 3, name: "RT55", unit: "CM" }
    ]
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

  renderTableData() {
    return this.state.sensors.map((student, index) => {
      const { sensorId, name, unit } = student; //destructuring
      return (
        // <tr key={sensorId}>
        //   <td>{sensorId}</td>
        //   <td>{name}</td>
        //   <td>{unit}</td>
        // </tr>
        <TableRow key={sensorId}>
          <TableCell component="th" scope="row">
            {sensorId}
          </TableCell>
          <TableCell align="right">{name}</TableCell>
          <TableCell align="right">{unit}</TableCell>
        </TableRow>
      );
    });
  }

  render() {
    const { classes } = this.props;

    let sensors = this.state.room ? (
      <Grid container xs={12}>
        <Grid item xs={6}>
          <LineChart sensor={this.state.room} />
        </Grid>
        <Grid item xs={6}>
          <BarChart sensor={this.state.room} />
        </Grid>
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
          <Grid
            container
            justify="center"
            className={classes.cardContainer}
            item
            xs={12}
            spacing={5}
          >
            {sensors}
          </Grid>
          <TableContainer>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Sensor ID</TableCell>
                  <TableCell align="right">Sensor Name</TableCell>
                  <TableCell align="right">Sensor Unit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>{this.renderTableData()}</TableBody>
            </Table>
          </TableContainer>

          {/* <table id="students" xs={12}>
            <tbody>{this.renderTableData()}</tbody>
          </table> */}
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

export default withStyles(styles)(room);
