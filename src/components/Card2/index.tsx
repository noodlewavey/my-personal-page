import Image from "next/image";
import styles from "./styles.module.scss";

const Card2 = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        <div className={styles.contentTop}>
          <h2>02 / TELL ME WHERE TO GO</h2>

          <p className={styles.subtitle}>
            A react web app which gives you directions to be translated in many
            languages, along with Google Streetview Photos of every part of your
            journey. Help a tourist out!
          </p>

          <p>
            Front-end developed in ReactJS using Material UI Components, API
            calls handled using a Node.js server with Express
          </p>
        </div>

        <a href="https://google.com" target="_blank" rel="noreferrer">
          Look at some directions here! ↗
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
          layout="fixed"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Card2;
