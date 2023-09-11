import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Card = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  const cardAnimation = useAnimation();
  const imageAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      cardAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2.5,
          bounce: 0.3,
        },
      });
      imageAnimation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 2.5,
          bounce: 0.3,
        },
      });
    }

    if (!inView) {
      cardAnimation.start({
        x: "-100vw",
      });
      imageAnimation.start({
        x: "100vw",
      });
    }
  }, [inView]);

  return (
    <div className={styles.card}>
      <motion.div className={styles.cardContent} animate={cardAnimation}>
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
        <motion.div animate={imageAnimation}>
          <div style={{ borderRadius: "15px", overflow: "hidden" }}>
            <Image
              src={"/artem-riasnianskyi.jpg"}
              blurDataURL={"/artem-riasnianskyi.jpg"}
              alt="artem-riasnianskyi"
              placeholder="blur"
              width={640}
              height={480}
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card;
