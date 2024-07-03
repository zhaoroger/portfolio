import React from "react";
import Image from "next/image";

import styles from "./contact.module.css";
import emailIcon from "../../../assets/contact/emailIcon.png";
import linkedinIcon from "../../../assets/contact/linkedinIcon.png";
import githubIcon from "../../../assets/contact/githubIcon.png";

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <Image src={emailIcon} alt="Email icon" />
          <a href="mailto:roger.zhao@mail.utoronto.ca">roger.zhao@mail.utoronto.ca</a>
        </li>
        <li className={styles.link}>
          <Image
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/renzhi-roger-zhao">linkedin.com/in/renzhi-roger-zhao</a>
        </li>
        <li className={styles.link}>
          <Image src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/zhaoroger">github.com/zhaoroger</a>
        </li>
      </ul>
    </footer>
  );
};