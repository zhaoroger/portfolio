import React from "react";
import Image from "next/image";

import styles from "./opener.module.css";
import sickpic from "../../../public/ihatethis.png"

export default function Opener() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I&apos;m Roger</h1>
        <p className={styles.description}>
          I&apos;m a 4th year CS student at the University of Toronto with experience Java, 
          Web Development, and many other tools and CS concepts.
        </p>
        <div className={styles.buttoncontainer}>
          <a href="roger.zhao@mail.utoronto.ca" className={styles.contactBtn}>
            Contact Me
          </a>
          <a href="/Resume_Roger_Zhao.pdf" className={styles.contactBtn}>
            Resume
          </a>
        </div>
      </div>
      <Image
        src={sickpic}
        alt="A picture"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
