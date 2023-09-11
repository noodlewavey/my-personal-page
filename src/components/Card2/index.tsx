import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Card2 = () => {
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
          <a href="https://google.com" target="_blank" rel="noreferrer">
            Look at some directions here! ↗
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

export default Card2;
