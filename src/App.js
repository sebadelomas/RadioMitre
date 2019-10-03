import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Finder from "./containers/Finder/Finder";


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>            
            <Route path="/" exact component={Finder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
