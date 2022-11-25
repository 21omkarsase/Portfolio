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
  } else if (skill === "node") {
    skillClass = classes.node;
  } else if (skill === "express") {
    skillClass = classes.express;
  } else if (skill === "mongodb") {
    skillClass = classes.mongodb;
  } else if (skill === "cpp") {
    skillClass = classes.cpp;
  } else if (skill === "python") {
    skillClass = classes.python;
  } else if (skill === "ml") {
    skillClass = classes.ml;
  } else if (skill === "dl") {
    skillClass = classes.dl;
  } else if (skill === "ds") {
    skillClass = classes.ds;
  } else if (skill === "algo") {
    skillClass = classes.algo;
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
