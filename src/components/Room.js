import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

//Material UI Imports
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import {Link}  from "react-router-dom";

const styles = {
  card: {
    display: "flex"
  }
};

class Room extends Component {
  render() {
    const {
      room: { alias, roomId, roomImage }
    } = this.props;
    return (
      <Link to={`/rooms/${roomId}`}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              image={roomImage}
              alt={alias}
              height="140"
              title={alias}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {alias}
              </Typography>
              {/* <Typography variant="body2" color="textSecondary" component="p">
                {address}
              </Typography> */}
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    );
  }
}

export default withStyles(styles)(Room);
