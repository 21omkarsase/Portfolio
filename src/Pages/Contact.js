import React from "react";
import classes from "./Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
function Contact() {
  return (
    <div className={classes.contact}>
      <div className={classes.contactArea}>
        <h1>Contact Me</h1>
        <p>Get In Touch</p>
        <div className={classes["main-area"]}>
          <div className={classes.contactInfo}>
            <div>
              <h3>Contact Info</h3>
              <hr />
            </div>
            <div className={classes.nameArea}>
              <FontAwesomeIcon className={classes.icon} icon={faUser} />
              <div className={classes.name}>
                <span>Name</span>
                <h4>Omkar Ramkrishna Sase</h4>
              </div>
            </div>
            <div className={classes.addressArea}>
              <FontAwesomeIcon
                className={classes.icon}
                icon={faMapLocationDot}
              />
              <div className={classes.address}>
                <span>Address</span>
                <h4>Thane, Maharashtra.</h4>
              </div>
            </div>
            <div className={classes.emailArea}>
              <FontAwesomeIcon className={classes.icon} icon={faMailBulk} />
              <div className={classes.email}>
                <span>Email</span>
                <h4>
                  <a target="_blank" href="mailto:saseomkar214@gmail.com">
                    saseomkar214@gmail.com
                  </a>
                </h4>
              </div>
            </div>
            <div className={classes["social-links"]}>
              <a target="_blank" href="https://www.linkedin.com/in/omkarsase/">
                <FontAwesomeIcon
                  className={classes.linkedin}
                  icon={faLinkedin}
                />
              </a>
              <a target="_blank" href="https://github.com/21omkarsase">
                <FontAwesomeIcon className={classes.github} icon={faGithub} />
              </a>
              <a target="_blank" href="https://twitter.com/_OmkarSase">
                <FontAwesomeIcon className={classes.twitter} icon={faTwitter} />
              </a>
              <a target="_blank" href="https://www.instagram.com/_omkarsase/">
                <FontAwesomeIcon
                  className={classes.instagram}
                  icon={faInstagram}
                />
              </a>
              <a
                target="_blank"
                href="https://www.facebook.com/omkar.sase.560/"
              >
                <FontAwesomeIcon
                  className={classes.facebook}
                  icon={faFacebook}
                />
              </a>
            </div>
          </div>
          <div className={classes.contactForm}>
            {/* <div>Message Me</div> */}
            <div className={classes.firstRow}>
              <div className={classes.nameDiv}>
                <input type="text" name="name" placeholder="Name" />
              </div>
              <div className={classes.emailDiv}>
                <input type="text" name="email" placeholder="Email" />
              </div>
            </div>
            <div className={classes.secondRow}>
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className={classes.thirdRow}>
              <textarea
                name="message"
                cols="40"
                rows="2"
                placeholder="Message"
              ></textarea>
            </div>
            <div className={classes.btn}>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
