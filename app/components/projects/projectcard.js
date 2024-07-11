import React from "react";
import Image from "next/image";

import styles from "./projectcard.module.css";

export default function ProjectCard ({
  project: { title, imageSrc, description, skills, demo, source, note },
}) {
  return (
    <div className={styles.container}>
      <Image
        src={`/${imageSrc}`}
        alt={`Image of ${title}`}
        className={styles.image}
        width={0}
        height={0}
        sizes="100vw"
      />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => {
          return (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        {demo && (
          <a href={demo} className={styles.link}>
          Demo
          </a>
        )}
        {source && (
          <a href={source} className={styles.link}>
          Code
          </a>
        )}
      </div>
      {note && (
        <p className={styles.note}>{note}</p>
      )}
    </div>
  );
};