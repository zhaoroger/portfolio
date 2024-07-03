import React from "react";
import { motion } from "framer-motion";
import styles from "./about_me.module.css"

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

export default function TabButton({ active, selectTab, children }) {
  const buttonClasses = active ? styles.on_tab : styles.off_tab;

  return (
    <button onClick={selectTab} className={styles.tab_button}>
      <p className={`${styles.tab_text} ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={styles.bottom_bar}
      ></motion.div>
    </button>
  );
};
