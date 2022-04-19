import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
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

  return (
    // className={isScrolled ? classes.scrolling : classes.notScrolling}
    <nav>
      <div className={classes.navbar}>
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
      </div>
    </nav>
  );
};

export default MainHeader;
