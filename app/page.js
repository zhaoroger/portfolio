"use client"

import styles from "./page.module.css";
import Navbar from "./components/navbar/navbar.js"
import About from "./components/about_me/about_me.js"
import Opener from "./components/opener/opener.js"
import Projects from "./components/projects/projects.js"
import Contact from "./components/contact/contact.js"


export default function Home() {
  return (
    <main>
      <Navbar/>
      <div className={styles.main} id="opener">
        <Opener/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </main>
  );
}
