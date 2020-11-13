import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import School from "./pages/School";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/addSchool" component={School} />
      </Switch>
    </div>
  );
}

export default App;
