import React from "react";
import classes from "./Education.module.css";

function Education() {
  return (
    <>
      <div className={classes["education-area"]}>
        <h1>Education</h1>
        <div>
          <h3>B.TECH IN COMPUTER ENGINEERING</h3>
          <hr className={classes.hLine} />
          <h4 className={classes.graduationYear}>2020-Expected(2024)</h4>
          <div className={classes.info}>
            <hr />
            <div className={classes.clgInfo}>
              <h3>Pillai College Of Engineering, New Panvel</h3>
              <ul className={classes.workList}>
                <li>CGPA : 9.4</li>
                <li>
                  Relevant Coursework: Data Structures, Algorithms, Object
                  Oriented Programming, Opeating Systems, DBMS, Computer Network
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h3>SENIOR SCHOOL & HIGH SCHOOL</h3>
          <hr className={classes.hLine} />
          <h4 className={classes.graduationYear}>2020</h4>
          <div className={classes.info}>
            <hr />
            <ul>
              <li>Senior School - KBP Junior College, Vashi - 78.00%</li>
              <li>High School -Matoshree School, Kokrud - 92.2%</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Education;
