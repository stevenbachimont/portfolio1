import React, { useState, useEffect } from 'react';
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import smallProjectsData from "../../data/smallProjects.json";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const { t } = useTranslation();
    const [projects, setProjects] = useState(projectsData); 

    useEffect(() => {
        const setProjectsData = () => {
            const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
            setProjects(isSmallScreen ? smallProjectsData : projectsData);
        };

        setProjectsData(); 
        window.addEventListener('resize', setProjectsData); 

        
        return () => {
            window.removeEventListener('resize', setProjectsData);
        };
    }, []);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>{t('proj.title')}</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} id={id} project={project} />;
                })}
            </div>
        </section>
    );
};
