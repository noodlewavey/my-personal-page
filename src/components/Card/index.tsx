import Image from "next/image";
import styles from "./styles.module.scss";

const Card = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <h2>01 / TRAITMATE DATING APP</h2>

          <p className={styles.subtitle}>
            A dating app which matches users with other people based on their
            Big Five personality score.
          </p>

          <p>
            Front-end developed in ReactJS using Material UI Components, backend
            developed with Java Spring Boot, with user authentication secured
            with Spring Security and a user database created with MySQL.
          </p>
        </div>

        <a href="https://google.com" target="_blank" rel="noreferrer">
          Try out my dating app! ↗
        </a>
      </div>
      <div style={{ borderRadius: "15px", overflow: "hidden" }}>
        <Image
          src={"/artem-riasnianskyi.jpg"}
          blurDataURL={"/artem-riasnianskyi.jpg"}
          alt="artem-riasnianskyi"
          placeholder="blur"
          width={640}
          height={480}
          quality={100}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Card;
