import React, { Component } from "react";

//Material UI Imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar>
          {/* que miras */}
          {/* <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Signup
          </Button> */}
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
