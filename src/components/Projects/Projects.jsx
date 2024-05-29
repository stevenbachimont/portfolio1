import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { useTranslation } from "react-i18next";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
    const { t } = useTranslation();

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