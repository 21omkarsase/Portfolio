import React from "react";
import classes from "./StartingAbout.module.css";
function StartingAbout() {
  return (
    <div className={classes.about}>
      <h1>About Me</h1>
      <div className={classes["main-about"]}>
        <div className={classes.photo}>
          <img
            src="https://21omkarsase.github.io/MyPortfolio/img/about-us.png"
            alt=""
          />
        </div>
        <div className={classes.info}>
          <p>
            I'am second year computer engineering student, at Pillai College Of
            Engineering, New Panvel.
          </p>
          <div className={classes.cvButton}>
            <button type="button">Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StartingAbout;
