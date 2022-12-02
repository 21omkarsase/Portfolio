import React from "react";
import classes from "./StartingAbout.module.css";
function StartingAbout() {
  return (
    <div className={classes.about}>
      <h1>About Me</h1>
      <hr />
      <div className={classes.info}>
        <p>
          I am a full stack developer and a pre final year computer engineering
          student, pursuing my degree from Pillai College of Engineering, New
          Panvel.
        </p>
        <button type="button">Download CV</button>
      </div>
    </div>
  );
}

export default StartingAbout;
