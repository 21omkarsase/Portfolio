import React, { useState } from "react";
import classes from "./MainHeader.module.css";

const MainHeader = () => {
  //   const [isScrolling, setScrolling] = useState(false);
  //   const scrollHandler = (e) => {
  //     if (e.scrollTop > 0) {
  //       setScrolling(true);
  //     }
  //   };
  return (
    <nav
    //   onScroll={scrollHandler}
    //   className={isScrolling ? classes.fixed : classes.nScroll}
    >
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
