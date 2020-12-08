import React from "react";

export default function SideBarStep() {
  return (
    <div className="side-bar-step">
      <ul className="list-unstyled side-bar-steps">
        <li className="side-bar-each-step">1. Add School</li>
        <li className="side-bar-each-step">2. Add Study</li>
        <li className="side-bar-each-step">2.1 Add Graduate Profiles</li>
        <li className="side-bar-each-step">2.1 Add Dublin Descriptors</li>
        <li className="side-bar-each-step">3. Add Professions</li>
        <li className="side-bar-each-step">4. Add Competencies</li>
        <li className="side-bar-each-step">
          4.1 Add Competencies Sub-criteria
        </li>
        <li className="side-bar-each-step">5. Add Study Year</li>
        <li className="side-bar-each-step">6. Add Study Learning Outcomes</li>
        <li className="side-bar-each-step">7. Add Modules</li>
        <li className="side-bar-each-step">7.1 Add Module Learning Outcomes</li>
      </ul>
    </div>
  );
}
