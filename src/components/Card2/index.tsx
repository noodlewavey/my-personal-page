import Image from "next/image";
import styles from "./styles.module.scss";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

const Card2 = () => {
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
            <Image
              src={"/wheretogo.png"}
              blurDataURL={"/artem-riasnianskyi.jpg"}
              alt="artem-riasnianskyi"
              placeholder="blur"
              width={640}
              height={400}
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Card2;
