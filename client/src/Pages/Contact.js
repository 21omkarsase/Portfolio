import React, { useState, useRef } from "react";
import classes from "./Contact.module.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Components/Layout/Loader";
import MetaData from "../Components/Layout/MetaData";
function Contact() {
  const [loading, setLoading] = useState(false);
  const nameref = useRef();
  const emailref = useRef();
  const subjectref = useRef();
  const messageref = useRef();

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const url = "http://127.0.0.1:5000/api/v1/contact";
    try {
      setLoading(true);
      const response = await axios.post(url, {
        name: nameref.current.value,
        email: emailref.current.value,
        subject: subjectref.current.value,
        message: messageref.current.value,
      });
      if (response.data.success === true) {
        alert("Message sent successfully");
      }
      setLoading(false);
    } catch (err) {
      if (err.response.data) {
        alert(err.response.data.message);
      } else {
        alert(err);
      }
      setLoading(false);
      return;
    }
  };
  return (
    <>
      <MetaData title="Omkar Sase | Contact" />
      <div className={classes.contact}>
        {loading && <Loader />}
        {!loading && (
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
                    <span className={classes.labelTag}>Name</span>
                    <h4>Omkar Ramkrishna Sase</h4>
                  </div>
                </div>
                <div className={classes.addressArea}>
                  <FontAwesomeIcon
                    className={classes.icon}
                    icon={faMapLocationDot}
                  />
                  <div className={classes.address}>
                    <span className={classes.labelTag}>Address</span>
                    <h4>Thane, Maharashtra.</h4>
                  </div>
                </div>
                <div className={classes.emailArea}>
                  <FontAwesomeIcon className={classes.icon} icon={faMailBulk} />
                  <div className={classes.email}>
                    <span className={classes.labelTag}>Email</span>
                    <h4>
                      <a target="_blank" href="mailto:saseomkar214@gmail.com">
                        saseomkar214@gmail.com
                      </a>
                    </h4>
                  </div>
                </div>
                <div className={classes["social-links"]}>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/omkarsase/"
                  >
                    <FontAwesomeIcon
                      className={classes.linkedin}
                      icon={faLinkedin}
                    />
                  </a>
                  <a target="_blank" href="https://github.com/21omkarsase">
                    <FontAwesomeIcon
                      className={classes.github}
                      icon={faGithub}
                    />
                  </a>
                  <a target="_blank" href="https://twitter.com/_OmkarSase">
                    <FontAwesomeIcon
                      className={classes.twitter}
                      icon={faTwitter}
                    />
                  </a>
                  <a
                    target="_blank"
                    href="https://www.instagram.com/_omkarsase/"
                  >
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
              <form
                onSubmit={formSubmitHandler}
                className={classes.contactForm}
              >
                <div className={classes.firstRow}>
                  <div className={classes.nameDiv}>
                    <input
                      ref={nameref}
                      required
                      type="text"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className={classes.emailDiv}>
                    <input
                      required
                      ref={emailref}
                      type="text"
                      name="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className={classes.secondRow}>
                  <input
                    ref={subjectref}
                    required
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className={classes.thirdRow}>
                  <textarea
                    ref={messageref}
                    required
                    name="message"
                    cols="40"
                    rows="2"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className={classes.btn}>
                  <button>Send Message</button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Contact;
