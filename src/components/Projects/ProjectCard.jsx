import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from "./ProjectCard.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project, id }) => {
    const { title, imageSrc, description, skills, demo, source } = project;
    const { t } = useTranslation();

    const translatedTitle = t(`proj.projects.${id}.title`);
    const translatedDescription = t(`proj.projects.${id}.description`);

    const filteredSkills = skillsData.filter((skill) => skills.includes(skill.id));



    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${translatedTitle}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{translatedTitle}</h3>
            <p className={styles.description}>{translatedDescription}</p>
            <div className={styles.skills}>
                {filteredSkills.map((skill, id) => (
                    <div key={id} className={styles.skill}>
                        <div className={styles.skillImageContainer}>
                            <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                        </div>
                    </div>
                ))}
            </div>
            <div className={styles.links}>
                {/*
                <a href={demo} className={styles.link} target="_blank" rel="noreferrer">
                    Demo
                </a>*/}

                <a href={source} className={styles.link} target="_blank" rel="noreferrer">
                    Source
                </a>
            </div>
        </div>
    );
};
