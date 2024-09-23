import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { useTranslation } from "react-i18next";
import { getImageUrl } from "../../utils";

export const Experience = () => {
    const { t } = useTranslation();

    return (
        <section className={styles.container} id="experience">
            <h2 className={styles.title}>{t('exp.title')}</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                                </div>
                                {/*<p>{skill.title}</p>*/}
                            </div>
                        );
                    })}
                </div>
                <ul className={styles.history}>
                    {history.map((historyItem, id) => {
                        const translatedRole = t(`exp.history.${id}.role`);
                        const translatedOrganisation = t(`exp.history.${id}.organisation`);
                        let translatedExperiences;

                        if (Array.isArray(historyItem.experiences)) {
                            translatedExperiences = historyItem.experiences.map((experience, expId) => t(`exp.history.${id}.experiences.${expId}`));
                        } else {
                            translatedExperiences = t(`exp.history.${id}.experiences`);
                        }

                        return (
                            <li key={id} className={styles.historyItem}>
                                <img
                                    src={getImageUrl(historyItem.imageSrc)}
                                    alt={`${translatedOrganisation} Logo`}
                                />
                                <div className={styles.historyItemDetails}>
                                    <h3>{translatedRole}</h3>
                                    <h2> {translatedOrganisation}</h2>
                                    <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                    <p>{translatedExperiences}</p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};