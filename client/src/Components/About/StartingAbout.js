import React from "react";
import classes from "./StartingAbout.module.css";
function StartingAbout() {
  return (
    <div className={classes.about}>
      <h1>
        <span>About</span>
        <span> Me</span>
      </h1>
      <hr />
      <div className={classes.info}>
        <p align="justify">
          I am a full stack developer and a pre final year computer engineering
          student, pursuing my degree from Pillai College of Engineering, New
          Panvel.
        </p>
        <a
          target="_blank"
          href="https://drive.google.com/drive/folders/1ms6WQSCg7M1kX0u8oCt-xGqokYBsBd4r?usp=sharing"
        >
          <button type="button">Download CV</button>
        </a>
      </div>
    </div>
  );
}

export default StartingAbout;
