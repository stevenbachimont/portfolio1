import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Steven</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 1 years of experience using React and
          NodeJS. Reach out if you'd like to learn more!
        </p>
          <a href="public/cv/cv.html" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
              My CV
          </a>
      </div>
        <img
            src={getImageUrl("hero/moi.png")}
            alt="Hero image of me"
            className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
