import React from "react";
import classes from "../Pages/Home.module.css";
// import { FontAwesomeIcon } from ".@fortawesome/react-fontawesome";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
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
          <div className={classes.wrapper}>
            <div className={classes["static-txt"]}>I'm </div>
            <ul className={classes["dynamic-txt"]}>
              <li>
                <span> A Studentt</span>
              </li>
              <li>
                <span> A Learnerr</span>
              </li>
              <li>
                <span> A Developerr</span>
              </li>
              <li>
                <span>Omkar Sasee</span>
              </li>
            </ul>
          </div>
          <div className={classes["social-icons"]}>
            <FontAwesomeIcon className={classes.twitter} icon={faTwitter} />
            <FontAwesomeIcon className={classes.github} icon={faGithub} />
            <FontAwesomeIcon className={classes.linkedin} icon={faLinkedin} />
            <FontAwesomeIcon className={classes.mail} icon={faMailBulk} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
