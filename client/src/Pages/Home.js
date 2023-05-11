import React, { useEffect, useRef } from "react";
import classes from "../Pages/Home.module.css";
import Typed from "typed.js";
import MetaData from "../Components/Layout/MetaData";
import photo from "../Images/photo.jpg";

function Home() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["A Learner", "A Developer", "Omkar Sase"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };
    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);
  return (
    <>
      <MetaData title="Omkar Sase | Home" />;
      <div className={classes["home-area"]}>
        <div className={classes.content}>
          <div className={classes["main-area"]}>
            <div className={classes.textarea}>
              <span>Hello, My Name is</span>
              <span className={classes.name}>Omkar Sase</span>
            </div>
            <div className={classes["text-box"]}>
              <span className={classes.staticTxt}>I'm </span>
              <span className={classes.dynamicTxt} ref={el}></span>
            </div>
            <div className={classes.hireButton}>
              <a target="_blank" href="https://www.linkedin.com/in/omkarsase/">
                <button type="button">Hire Me</button>
              </a>
            </div>
          </div>
          <div className={classes["image-area"]}>
            <img src={photo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
