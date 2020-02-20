import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
//Material UI Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
// import { graphicTypes, optionsForGraphic } from "@kingtakeo/rechartjs";

const styles = {
  card: {
    display: "flex"
  }
};

class House extends Component {
  render() {
    const {
      house: { houseId, address, alias, houseImage }
    } = this.props;
    return (
      <Link to={`/houses/${houseId}`} style={{ textDecoration: "none" }}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={houseImage}
              alt={alias}
              height="140"
              title={alias}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {alias}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {address}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}

export default withStyles(styles)(House);
