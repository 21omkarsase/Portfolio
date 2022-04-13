import React from "react";
import classes from "./Bars.module.css";

const Bars = ({ label, skill, percentage }) => {
  let skillClass;
  if (skill === "html") {
    skillClass = classes.html;
  } else if (skill === "css") {
    skillClass = classes.css;
  } else if (skill === "js") {
    skillClass = classes.js;
  } else if (skill === "react") {
    skillClass = classes.react;
  } else if (skill === "bootstrap") {
    skillClass = classes.bootstrap;
  } else if (skill === "nodejs") {
    skillClass = classes.nodejs;
  }
  return (
    <>
      <div className={classes.bars}>
        <div className={classes.info}>
          <span>{label}</span>
          <span>{percentage}</span>
        </div>
        <div className={`${classes.line}${" "}${skillClass}`}></div>
      </div>
    </>
  );
};

export default Bars;
