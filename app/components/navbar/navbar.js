import React, { useState, useEffect } from "react";
import Image from "next/image"

import styles from "./navbar.module.css";
import closeIcon from '../../../assets/nav/closeIcon.png';
import menuIcon from '../../../assets/nav/menuIcon.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById('navbar');
      if (window.scrollY > 0) {
        navbar.classList.add(styles.scrolled);
      } else {
        navbar.classList.remove(styles.scrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Dependency array ensures this effect runs only once after the initial render


  return (
    <nav className={styles.navbar}>
      <div className={styles.container} id="navbar">
        <a className={styles.title} href="#opener">
        {/* <Image
          src="/kidridingbus.png"
          alt="A picture"
          className={styles.heroImg}
          height={75}
          width={75}
          style={{objectFit: "contain"}}
        /> */}
        Roger
        </a>
        <div className={styles.menu}>
          <Image
            className={styles.menuBtn}
            src={menuOpen ? closeIcon : menuIcon}
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};