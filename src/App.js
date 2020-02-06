import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

//Components
import Navbar from "./components/Navbar";

//Pages
import home from "./pages/home";
import house from "./pages/house";
import room from "./pages/login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {/* <Navbar /> */}
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/houses/:houseId" component={house} />
              <Route exact path="/rooms/:roomId" component={room} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
