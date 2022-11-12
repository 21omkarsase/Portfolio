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
            <Bars label="HTML" skill="html" percentage="100%" />
            <Bars label="CSS" skill="css" percentage="70%" />
            <Bars label="Javascript" skill="js" percentage="75%" />
            <Bars label="React" skill="react" percentage="90%" />
            <Bars label="Bootstrap" skill="bootstrap" percentage="100%" />
            <Bars label="Node" skill="nodejs" percentage="100%" />
            <Bars label="Express" skill="express" percentage="100%" />
          </div>
          <div className={classes.col}>
            <Bars label="Mongodb" skill="nodejs" percentage="0%" />
            <Bars label="CPP" skill="cpp" percentage="0%" />
            <Bars label="Python" skill="python" percentage="0%" />
            <Bars label="Machine Learning" skill="ml" percentage="0%" />
            <Bars label="Deep Learning" skill="dl" percentage="0%" />
            <Bars label="Data Structures" skill="dl" percentage="0%" />
            <Bars label="Algorithms" skill="dl" percentage="0%" />
          </div>
        </div>
      </div>
      <div className={classes.achivements}></div>
      <div className={classes.certificates}>
        <h1>Licenses & certifications</h1>
        <div className={classes.certificates}>
          <ul className={classes.certificateList}>
            <a
              href="https://drive.google.com/file/d/1J7GlYKm_goj4CW9iltAxhyEXTcGsKfxT/view?usp=sharing"
              target="_blank"
            >
              <li>
                React - The Complete Guide (incl Hooks, React Router,
                Redux)React - The Complete Guide (incl Hooks, React Router,
                Redux)
              </li>
            </a>
            <a
              href="https://www.coursera.org/account/accomplishments/certificate/84UQ897DGA8P"
              target="_blank"
            >
              <li>Front-End Web UI Frameworks and Tools: Bootstrap 4</li>
            </a>
            <a
              href="https://drive.google.com/file/d/1xj3hkPAXP76RRduZ6tm4PSRmFb53n1v5/view?usp=sharing"
              target="_blank"
            >
              <li>Python Course Certificate</li>
            </a>
            <a
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
