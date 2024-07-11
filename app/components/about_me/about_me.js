import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tabbutton";
import styles from "./about_me.module.css"
import sickpic from "../../../public/kidridingbus.png"

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul className={styles.list_items}>
        <li>Java</li>
        <li>Python</li>
        <li>C</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>MIPS Assembly</li>
        <li>Racket</li>
        <li>Haskell</li>
      </ul>
    ),
  },
  {
    title: "Other Tools",
    id: "other",
    content: (
      <ul className={styles.list_items}>
        <li>Git</li>
        <li>React</li>
        <li>Express</li>
        <li>Node.js</li>
        <li>Tailwind</li>
        <li>PostgreSQL</li>
        <li>MongoDB</li>
        <li>Docker</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className={styles.list_items}>
        <li>University of Toronto: CS Specialist</li>
      </ul>
    ),
  },
];


export default function Aboutme () {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className={styles.about_me} id="about">
      <div className={styles.divider}>
        <div className={styles.text_section}>
          <h2 className={styles.about_header}>About Me</h2>
          <p className={styles.para}>
            Thanks for checking out this page. My name is Renzhi Zhao, but I prefer to go by Roger.
            I am a third-year Computer Science student at the University of Toronto, specializing in Software Engineering. I am a quick learner, always eager and interested in exploring new technologies and concepts. 
            While I thrive in team-oriented environments, I also excel at working independently to tackle challenges and deliver high-quality results. Outside of CS, I am also pursuing a minor in Linguistics.

            <br/><br/>Throughout my studies, I have gained experience with various technologies and computer science concepts, continuously expanding my knowledge and skills.
          </p>
          <div className={styles.tab_section}>
            <TabButton
              selectTab={() => handleTabChange("languages")}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("other")}
              active={tab === "other"}
            >
              {" "}
              Other Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className={styles.tab_content}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};