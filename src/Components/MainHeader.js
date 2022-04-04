import React, { useState } from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollHandler = () => {
    const scrollTop = window.scrollY;
    console.log(isScrolled);
    console.log(scrollTop);
    if (scrollTop >= 800) {
      setIsScrolled(true);
    }
    if (scrollTop < 800) {
      setIsScrolled(false);
    }
  };
  window.addEventListener("scroll", scrollHandler);

  return (
    <nav className={isScrolled ? classes.scrolling : classes.notScrolling}>
      <div className={classes.navbar}>
        <div className={classes.logo}>OmkarSase</div>
        <div className={classes["navbar-nav"]}>
          <ul className={classes.list}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainHeader;
