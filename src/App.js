import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Join} />
      <ProtectedRoute path="/chat" component={Chat}></ProtectedRoute>
      <ProtectedRoute path="/chat1" component={Chat}></ProtectedRoute>
      <Route path="*" component={() => "404 NOT FOUND"}></Route>
    </Switch>
  </Router>
);

export default App;
