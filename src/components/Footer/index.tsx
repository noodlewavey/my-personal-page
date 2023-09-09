import Link from "next/link";
import styles from "./styles.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p></p>

      <ul>
        <li>
          <Link href="/">
            <a>.</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>.</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>.</a>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
