import React from "react";
import classes from "../Pages/Home.module.css";
function Home() {
  return (
    <div className={classes["home-area"]}>
      <div className={classes["main-area"]}>
        <div className={classes.wrapper}>
          <div className={classes["static-txt"]}>I'm a</div>
          <ul className={classes["dynamic-txt"]}>
            <li>
              <span> Student</span>
            </li>
            <li>
              <span> Learner</span>
            </li>
            <li>
              <span> Developer</span>
            </li>
            {/* <li><span>Student</span></li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
