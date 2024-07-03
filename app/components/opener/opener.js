import React from "react";
import Image from "next/image";

import styles from "./opener.module.css";
import sickpic from "../../../public/kidridingbus.png"

export default function opener() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Roger</h1>
        <p className={styles.description}>
          I'm a 3rd year CS student at the University of Toronto with experience with OOP in Java, 
          Web Development (JS, HTML, CSS, etc) and more!
        </p>
        <a href="roger.zhao@mail.utoronto.ca" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <Image
        src={sickpic}
        alt="A picture"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};