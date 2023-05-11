import React from "react";
import classes from "./Experience.module.css";

function Experience() {
    return (
        <>
            <div className={classes["experience-area"]}>
                <h1 className={classes.heading}>Technical Experience</h1>
                <div className={classes.experience_list}>
                    <div className={classes.deep_blue}>
                        <div className={classes.company}>
                            <h2 className={classes.company_name}>Deep Blue 2023 (Mastek)</h2>
                            <span>December 2022 - April 2023</span>
                        </div>
                        <h3>Full Stack Developer</h3>
                        <ul className={classes.description}>
                            <li>
                                Collaborated on a meeting summarization project using natural language processing techniques.
                            </li>
                            <li>Built a dashboard website using React, Express, and MongoDB for data storage.</li>
                            <li>Competed in the semifinal and final rounds of the hackathon and received recognition for technical
                                innovation and impact.</li>
                            <li>Developed skills in teamwork, problem-solving, and project management during the hackathon.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Experience;
