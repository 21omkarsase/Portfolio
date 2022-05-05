import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, fahome } from "@fortawesome/free-solid-svg-icons";
import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { faDiagramProject } from "@fortawesome/free-solid-svg-icons";
// import {about}
import { faContactBook } from "@fortawesome/free-solid-svg-icons";
import { faNavicon } from "@fortawesome/free-solid-svg-icons";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const MainHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isNavClose, setIsNavClose] = useState(false);

  const openNavHandler = () => {
    setIsNavOpen((prevState) => !prevState);
    setIsNavClose((prevState) => !prevState);
  };
  return (
    <nav>
      {isNavOpen && !isNavClose && (
        <div className={classes.navBurger} onClick={openNavHandler}>
          <FontAwesomeIcon className={classes.burgerIcon} icon={faNavicon} />
        </div>
      )}
      {!isNavOpen && isNavClose && (
        <div className={classes.navBar} onClick={openNavHandler}>
          <FontAwesomeIcon icon={faClose} className={classes.closeIcon} />
          <div className={classes.mainNav}>
            <div className={classes.home}>
              <Link to="/home">
                <FontAwesomeIcon icon={faHome} className={classes.icon} />
                <span>Home</span>
              </Link>
            </div>
            <div className={classes.about}>
              <Link to="/about">
                <FontAwesomeIcon icon={faInfo} className={classes.icon} />
                <span>About</span>
              </Link>
            </div>
            <div className={classes.project}>
              <Link to="/projects">
                <FontAwesomeIcon
                  icon={faDiagramProject}
                  className={classes.icon}
                />
                <span>Projects</span>
              </Link>
            </div>
            <div className={classes.contact}>
              <Link to="/contact">
                <FontAwesomeIcon
                  icon={faContactBook}
                  className={classes.icon}
                />
                <span>Contact</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* <div className={classes.navbar}>
        <div className={classes.logo}>OmkarSase</div>
        <div className={classes["navbar-nav"]}>
          <ul className={classes.list}>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </div>
      </div> */}
    </nav>
  );
};

export default MainHeader;

// const [isScrolled, setIsScrolled] = useState(false);
// const scrollHandler = () => {
//   const scrollTop = window.scrollY;
//   if (scrollTop >= 5) {
//     setIsScrolled(true);
//   }
//   if (scrollTop < 4) {
//     setIsScrolled(false);
//   }
// };
// window.addEventListener("scroll", scrollHandler);

// className={isScrolled ? classes.scrolling : classes.notScrolling}
