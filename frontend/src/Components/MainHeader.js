import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, fahome } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  return (
    <nav>
      <div className={classes.navbar}>
        <div className={classes.logo}>
          <p className={classes.logoTitle}>Omkar Sase</p>
        </div>
        <div className={classes.nav_links}>
          <div className={classes.home}>
            <Link className={classes.links} to="/">
              <FontAwesomeIcon icon={faHome} className={classes.icon} />
              <span>Home</span>
            </Link>
          </div>
          <div className={classes.about}>
            <Link className={classes.links} to="/about">
              <FontAwesomeIcon icon={faCircleInfo} className={classes.icon} />
              <span>About</span>
            </Link>
          </div>
          <div className={classes.project}>
            <Link className={classes.links} to="/projects">
              <FontAwesomeIcon
                icon={faDiagramProject}
                className={classes.icon}
              />
              <span>Projects</span>
            </Link>
          </div>
          <div className={classes.contact}>
            <Link className={classes.links} to="/contact">
              <FontAwesomeIcon icon={faContactBook} className={classes.icon} />{" "}
              <span>Contact</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
