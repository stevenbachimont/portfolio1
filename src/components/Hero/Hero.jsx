import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Steven</h1>
        <p className={styles.description}>
          I'm a web developer with 1 year of experience using React, Express, MySQL and
          NodeJS. I'm learning, TypeScript, NextJS and Docker. Reach out if you'd like to learn more!
        </p>
          <a href="https://stevenbachimont.github.io/cv/" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
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
