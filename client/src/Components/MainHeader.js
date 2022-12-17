import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  const [navStatus, setNavStatus] = useState(false);
  const navRef = useRef();
  const navbarHandler = () => {
    setNavStatus((navStatus) => !navStatus);
  };
  return (
    <header>
      <nav>
        <div className={classes.navbar}>
          <Link className={classes.links} to="/">
            <div className={classes.logo}>
              <p className={classes.logoTitle}>Omkar Sase</p>
            </div>
          </Link>

          <div onClick={navbarHandler} className={classes.bars}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
        <div
          ref={navRef}
          className={`${navStatus ? classes.navOpen : classes.navClose} ${
            classes.nav_links
          }`}
        >
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
      </nav>{" "}
    </header>
  );
};

export default MainHeader;
