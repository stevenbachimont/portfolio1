import { useState } from "react";
import { useTranslation } from "react-i18next";

import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
      <nav className={styles.navbar}>
        <a className={styles.title} >
          Steven Bachimont <br/> -WebDevelopper- <br/> -Portfolio-
        </a>
        <div className={styles.menu}>
          <img
              className={styles.menuBtn}
              src={
                menuOpen
                    ? getImageUrl("nav/closeIcon.png")
                    : getImageUrl("nav/menuIcon.png")
              }
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
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <label className={styles.switch}>
                <span className={styles.tr}>EN</span>
                <input type="checkbox" onChange={() => changeLanguage(i18n.language === 'en' ? 'fr' : 'en')}/>
                <span className={`${styles.slider} ${styles.round}`}></span>
                <span className={styles.tr}>FR</span>
              </label>
            </li>
          </ul>
        </div>
      </nav>
  );
};
