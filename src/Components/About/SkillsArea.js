import React from "react";
import classes from "./SkillsArea.module.css";
import Bars from "./Bars";

function SkillsArea() {
  return (
    <div className={classes["skills-area"]}>
      <div className={classes.skills}>
        <h1>My Skills</h1>
        <div className={classes.skills}>
          <div className={classes["info-area"]}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum iste
            ducimus, quae earum mollitia tempore labore repellendus. Mollitia,
            consequuntur ipsum molestias, excepturi itaque aperiam quaerat
            corrupti ad asperiores laudantium ex!
          </div>
          <div className={classes.skillsList}>
            <div className={classes.skillSet1}>
              <Bars label="HTML" skill="html" percentage="100%" />
              <Bars label="CSS" skill="css" percentage="70%" />
              <Bars label="Javascript" skill="js" percentage="75%" />
            </div>
            <div className={classes.skillSet2}>
              <Bars label="React" skill="react" percentage="90%" />
              <Bars label="Bootstrap" skill="bootstrap" percentage="100%" />
              <Bars label="Node.js" skill="nodejs" percentage="0%" />
            </div>
          </div>
        </div>
      </div>
      <div className={classes.certificates}>
        <h4>Licenses & certifications</h4>
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
