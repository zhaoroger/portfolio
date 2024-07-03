import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./tabbutton";
import styles from "./about_me.module.css"
import sickpic from "../../../public/kidridingbus.png"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className={styles.list_items}>
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className={styles.list_items}>
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className={styles.list_items}>
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];


export default function Aboutme () {
  const [tab, setTab] = useState("skills");
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
            Technically, my name is Renzhi, but I have gone by Roger my entire life.
            I am a third-year Computer Science student at the University of Toronto, specializing in Software Engineering. I am a quick learner, always eager and interested in exploring new technologies and concepts. 
            While I thrive in team-oriented environments, I also excel at working independently to tackle challenges and deliver high-quality results.
            <br/><br/>Outside of CS, I am also pursuing a minor in Linguistics, and in my spare time I enjoy manga and anime.

            <br/><br/>Throughout my studies, I have gained experience with various technologies and computer science concepts, continuously expanding my knowledge and skills.
          </p>
          <div className={styles.tab_section}>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
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