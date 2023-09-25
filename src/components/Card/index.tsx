import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Card = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  const cardAnimation = useAnimation();
  const imageAnimation = useAnimation();

  return (
    <div className={styles.card}>
      <motion.div
        className={styles.cardContent}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{
          duration: 2,
          type: "spring",
        }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
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
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Try out my dating app! ↗
          </a>
        </div>
      </motion.div>
      <div ref={ref}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{
            duration: 2,
            type: "spring",
          }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <div style={{ borderRadius: "15px", overflow: "hidden" }}>
            <iframe
              width="640"
              height="480"
              src="https://www.youtube.com/embed/jM0Q1Tf7Sds"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
