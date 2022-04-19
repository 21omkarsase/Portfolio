import React from "react";
import classes from "../Pages/Home.module.css";

function Home() {
  return (
    <div className={classes["home-area"]}>
      <div className={classes.content}>
        <div className={classes.img}>
          <img
            src="https://21omkarsase.github.io/MyPortfolio/img/banner/banner-image.png"
            alt=""
          />
        </div>
        <div className={classes["main-area"]}>
          <div className={classes.textarea}>
            <span>Hello, My Name is</span>
            <span className={classes.name}>Omkar Sase</span>
          </div>
          <div className={classes.wrapper}>
            <div className={classes["static-txt"]}>I'm </div>
            <ul className={classes["dynamic-txt"]}>
              <li>
                <span className={classes.student}> A Studentt</span>
              </li>
              <li>
                <span> A Learnerr</span>
              </li>
              <li>
                <span> A Developerr</span>
              </li>
              {/* <li>
                <span>Omkar Sasee</span>
              </li> */}
            </ul>
          </div>
          <div className={classes.hireButton}>
            <a target="_blank" href="https://www.linkedin.com/in/omkarsase/">
              <button type="button">Hire Me</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
