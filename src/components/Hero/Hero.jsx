// Hero.jsx
import React from "react";
import { useTranslation } from "react-i18next";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>{t('hero.title')}</h1>
                <p className={styles.description}>
                    {t('hero.description')}
                </p>
                <a href="https://stevenbachimont.github.io/cv/" className={styles.contactBtn} target="_blank" rel="noopener noreferrer">
                    {t('hero.cvLink')}
                </a>
            </div>
            <img
                src={getImageUrl("hero/moi.png")}
                alt={t('hero.altText')}
                className={styles.heroImg}
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};