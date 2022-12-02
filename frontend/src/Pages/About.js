import React from "react";
import Education from "../Components/About/Education";
import SkillsArea from "../Components/About/SkillsArea";
import StartingAbout from "../Components/About/StartingAbout";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes["about-area"]}>
      <StartingAbout />
      <Education />
      <SkillsArea />
    </div>
  );
}

export default About;
