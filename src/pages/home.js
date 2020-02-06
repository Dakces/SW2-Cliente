import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import House from "../components/House";

import Typography from "@material-ui/core/Typography";

class home extends Component {
  state = {
    houses: null
  };
  componentDidMount() {
    axios
      .get("/houses")
      .then(res => {
        console.log(res.data);
        this.setState({
          houses: res.data.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    let recentHousesMarkup = this.state.houses ? (
      this.state.houses.map(house => (
        <Grid item xs={3}>
          <House house={house} />
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
          Seleccione uno de sus hogares:
        </Typography>
        <Grid container spacing={1}>
          <Grid container justify="center" item xs={12} spacing={3}>
            {recentHousesMarkup}
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default home;
