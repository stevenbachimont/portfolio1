import styles from "./ProjectCard.module.css";
import skillsData from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
                                project: { title, imageSrc, description, skills, demo, source },
                            }) => {
    const filteredSkills = skillsData.filter((skill) => skills.includes(skill.id));

    return (
        <div className={styles.container}>
            <img
                src={getImageUrl(imageSrc)}
                alt={`Image of ${title}`}
                className={styles.image}
            />
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <div className={styles.skills}>
                {filteredSkills.map((skill, id) => {
                    return (
                        <div key={id} className={styles.skill}>
                            <div className={styles.skillImageContainer}>
                                <img src={getImageUrl(skill.imageSrc)} alt={skill.title}/>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={styles.links}>
                <a href={demo} className={styles.link} target="_blank">
                    Demo
                </a>
                <a href={source} className={styles.link} target="_blank">
                    Source
                </a>
            </div>
        </div>
    );
};