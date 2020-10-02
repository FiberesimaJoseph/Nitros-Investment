import React from "react";
import Homepage from "./homepage";
import Login from "./login";
import Register from "./signup";
import Dashboard from "./dashboard";
import { Switch, Route } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
