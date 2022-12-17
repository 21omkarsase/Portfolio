import React from "react";
import Education from "../Components/About/Education";
import SkillsArea from "../Components/About/SkillsArea";
import StartingAbout from "../Components/About/StartingAbout";
import classes from "./About.module.css";
import MetaData from "../Components/Layout/MetaData";
function About() {
  return (
    <>
      <MetaData title="Omkar Sase | About" />
      <div className={classes["about-area"]}>
        <StartingAbout />
        <Education />
        <SkillsArea />
      </div>
    </>
  );
}

export default About;
