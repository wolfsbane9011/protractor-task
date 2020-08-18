import React, {Component} from 'react';
import {Item} from "semantic-ui-react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPageComponent from "./components/loginPageComponent";
import DashboardComponent from "./components/dashboardComponent";

class App extends Component {
  render() {
    return (
        <Router>
          <Item as='div' className="App">
            <Switch>
              <Route exact path='/main' component={DashboardComponent}/>
              <Route exact path='/' component={LoginPageComponent}/>
            </Switch>
          </Item>
        </Router>
    )
  }
}

export default App;