import React from "react";
import Homepage from "./homepage";
import Login from "./login";
import Register from "./signup";
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
      </Switch>
    </div>
  );
};

export default App;
