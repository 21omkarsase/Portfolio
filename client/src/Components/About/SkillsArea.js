import React from "react";
import classes from "./SkillsArea.module.css";
import Bars from "./Bars";

function SkillsArea() {
  return (
    <div className={classes.skillSection}>
      <div className={classes.SkillsArea}>
        <h1>Skills</h1>
        <div className={classes.skills}>
          <div className={classes.col}>
            <Bars label="HTML" skill="html" percentage="90%" />
            <Bars label="CSS" skill="css" percentage="90%" />
            <Bars label="Javascript" skill="js" percentage="80%" />
            <Bars label="React" skill="react" percentage="80%" />
            <Bars label="Bootstrap" skill="bootstrap" percentage="90%" />
            <Bars label="Node" skill="node" percentage="80%" />
            <Bars label="Express" skill="express" percentage="80%" />
          </div>
          <div className={classes.col}>
            <Bars label="Mongodb" skill="mongodb" percentage="80%" />
            <Bars label="CPP" skill="cpp" percentage="90%" />
            <Bars label="Python" skill="python" percentage="90%" />
            <Bars label="Machine Learning" skill="ml" percentage="50%" />
            <Bars label="Deep Learning" skill="dl" percentage="50%" />
            <Bars label="Data Structures" skill="ds" percentage="70%" />
            <Bars label="Algorithms" skill="algo" percentage="50%" />
          </div>
        </div>
      </div>
      <div className={classes.achivements}></div>
      <div className={classes.certificates}>
        <h1>Licenses & certifications</h1>
        <div className={classes.certificates}>
          <ul className={classes.certificateList}>
            <a
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1SbqgLCzWYjRkf_n_ljRlPlkkXMNf1Y2q/view"
              target="_blank"
            >
              <li>Deep Blue Hackathon Finalist Certificate </li>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://ude.my/UC-a07bf607-54ca-47f5-918d-4d7e3a507f65"
              target="_blank"
            >
              <li>
                React - The Complete Guide (incl Hooks, React Router, Redux)
              </li>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://ude.my/UC-bad714df-90ea-437f-932a-821eec33195d/"
              target="_blank"
            >
              <li>Udemy The Complete Node.js Developer Course</li>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://www.coursera.org/account/accomplishments/certificate/84UQ897DGA8P"
              target="_blank"
            >
              <li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1xj3hkPAXP76RRduZ6tm4PSRmFb53n1v5/view?usp=sharing"
              target="_blank"
            >
              <li>Python Course Certificate</li>
            </a>
            <a
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/15awTfrg5OiM6NfTR_SqlRAcClw2EfnbX/view?usp=sharing"
              target="_blank"
            >
              <li>Certificate for Completion of C Training</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SkillsArea;
