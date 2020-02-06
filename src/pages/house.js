import React, { Component } from "react";
import Link from "react-router-dom/Link";
import axios from "axios";
import Room from "../components/Room";

//Material UI Imports
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";


class house extends Component {
  state = {
    house: null
  };

  componentDidMount() {
    const houseId = this.props.match.params.houseId;

    axios
      .get(`/houses/${houseId}`)
      .then(res => {
        console.log(res.data.data);
        this.setState({
          house: res.data.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    let rooms = this.state.house ? (
      this.state.house.rooms.map(room => (
        <Grid item xs={3}>
          <Room house={this.state.house} room={room} />
        </Grid>
      ))
    ) : (
      <p>Loading ...</p>
    );

    return (
      <div>
        <Typography
          gutterBottom
          variant="h4"
          component="h3"
          style={{ marginTop: 10 }}
        >
          Seleccione una de sus habitaciones:
        </Typography>
        <Grid container spacing={1}>
          <Grid container justify="center" item xs={12} spacing={3}>
            {rooms}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default house;
