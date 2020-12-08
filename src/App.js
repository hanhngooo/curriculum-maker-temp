import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import School from "./pages/School";
import Study from "./pages/Study";
import GraduateProfile from "./pages/GraduateProfile";
import Navigation from "./components/Navigation";
import Profession from "./pages/Profession";
import Competency from "./pages/Competency";
import StudyYear from "./pages/StudyYear";
import SLO from "./pages/SLO";
import Module from "./pages/Module";
import Teacher from "./pages/Teacher";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/addSchool" component={School} />
        <Route exact path="/addStudy" component={Study} />
        <Route exact path="/addGraduateProfile" component={GraduateProfile} />
        <Route exact path="/addProfession" component={Profession} />
        <Route exact path="/addProfession" component={Profession} />
        <Route exact path="/addCompetency" component={Competency} />
        <Route exact path="/addStudyYear" component={StudyYear} />
        <Route exact path="/addSLO" component={SLO} />
        <Route exact path="/addModule" component={Module} />
        <Route exact path="/addTeacher" component={Teacher} />
      </Switch>
    </div>
  );
}

export default App;
