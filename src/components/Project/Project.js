// Project.js (optional - only if you need this component)
import styles from "./Project.module.css";

const Project = ({ img, title, techno, description, link, source }) => {
  return (
    <div className={styles.project}>
      <img src={img} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p className={styles.techno}>{techno}</p>
        <p className={styles.description}>{description}</p>
        <div className={styles.buttons}>
          <a href={link} className={styles.button}>See Live</a>
          <a href={source} className={styles.button}>Source Code</a>
        </div>
      </div>
    </div>
  );
};

export default Project;