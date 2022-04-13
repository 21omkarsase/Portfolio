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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et quasi
            quisquam soluta reprehenderit est quidem ipsum laboriosam nobis,
            numquam provident, tenetur blanditiis quaerat aspernatur molestias
            autem! Voluptate aspernatur unde temporibus sunt? Unde quasi nam vel
            harum corporis quo nulla ducimus adipisci blanditiis, reiciendis at,
            inventore dolorem perferendis, animi similique architecto.
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
