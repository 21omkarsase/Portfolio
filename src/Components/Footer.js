import React from "react";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.footer_content}>
          <h4>Created By Omkar Sase | © ALL RIGHTS RESERVED.</h4>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
