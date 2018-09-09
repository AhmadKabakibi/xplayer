import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from "constants/routes";

import MainPage from "./MainPage";
import NewVideo from "./NewVideo";

const App = () => (
  <Router>
    <Switch>
      <Route exact path={routes.VIDEOS} component={MainPage} />
      <Route exact path={routes.NEW_VIDEO} component={NewVideo} />
    </Switch>
  </Router>
);

export default App;
