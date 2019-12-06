import React from "react";
import Dashboard from "./components/Dashboard";
import AddInsp from "./components/AddInsp";
import Navi from "./components/Navi";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { getInspections } from "./store/inspections/actions";
import "./App.css";

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(getInspections());
  }
  render() {
    return (
      <div className="App">
        <main>
          <Navi />
          <br />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/addInsp" component={AddInsp} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default connect()(App);
