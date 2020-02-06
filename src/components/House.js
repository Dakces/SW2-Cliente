import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//Material UI Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const styles = {
  card: {
    display: "flex"
  }
};

class House extends Component {
  render() {
    const {
      classes,
      house: {
        houseId,
        ownerNickname,
        createdAt,
        roomCount,
        address,
        alias,
        houseImage
      }
    } = this.props;
    return (
      <Link to={`/${houseId}`}>
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
