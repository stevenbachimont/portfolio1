import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import projectsData from "../../data/projects.json";
import smallProjectsData from "../../data/smallProjects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const setProjectsData = () => {
            const isSmallScreen = window.matchMedia("(max-width: 600px)").matches;
            setProjects(isSmallScreen ? smallProjectsData : projectsData);
        };

        setProjectsData(); // Set initial data
        window.addEventListener('resize', setProjectsData); // Update data when screen size changes

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', setProjectsData);
        };
    }, []);

    return (
        <section className={styles.container} id="projects">
            <h2 className={styles.title}>Projects</h2>
            <div className={styles.projects}>
                {projects.map((project, id) => {
                    return <ProjectCard key={id} project={project} />;
                })}
            </div>
        </section>
    );
};