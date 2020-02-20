import React, { Component } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import House from "../components/House";
import queryString from "query-string";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  cardsSectionMargin: {
    marginTop: "120px",
    marginBottom: "30px"
  },
  houseCard: {
    marginTop: "10px",
    marginBottom: "10px"
  }
});

class home extends Component {
  state = {
    houses: null
  };
  componentDidMount() {
    const values = queryString.parse(this.props.location.search);
    console.log(values.uid); // "top"

    axios
      .get("/houses")
      .then(res => {
        this.setState({
          houses: res.data.data
        });
      })
      .catch(err => console.log(err));
  }
  render() {
    const { classes } = this.props;

    let houseComponents = this.state.houses ? (
      this.state.houses.map(house => (
        <Grid
          key={house.houseId}
          item
          xs={8}
          md={4}
          className={classes.houseCard}
        >
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
          className={classes.cardsSectionMargin}
        >
          Seleccione uno de sus hogares:
        </Typography>
        <Grid container justify="space-evenly" alignItems="center" item xs={12}>
          {houseComponents}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(home);
