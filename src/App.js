import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import School from "./pages/School";
import Study from "./pages/Study";
import Navigation from "./components/Navigation";
import Profession from "./pages/Profession";
import Competency from "./pages/Competency";
import StudyYear from "./pages/StudyYear";
import SLO from "./pages/SLO";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/addSchool" component={School} />
        <Route exact path="/addStudy" component={Study} />
        <Route exact path="/addProfession" component={Profession} />
        <Route exact path="/addCompetency" component={Competency} />
        <Route exact path="/addStudyYear" component={StudyYear} />
        <Route exact path="/addSLO" component={SLO} />
      </Switch>
    </div>
  );
}

export default App;
