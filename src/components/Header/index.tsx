import Link from "next/link";
import { IconDown } from "./icon";
import styles from "./styles.module.scss";
import CircularImage from "../CircularImage";

type Props = {
  isHome?: boolean;
};

const Header = ({ isHome }: Props) => {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.navTop}>
          <CircularImage />

          <ul>
            <li>
              <Link href="https://github.com/noodlewavey/">
                <a>Github</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>LinkedIn</a>
              </Link>
            </li>
            <li>
              {/* <Link href="/"> */}
              <a>email:jasminewangdev@outlook.com</a>
              {/* </Link> */}
            </li>
          </ul>
        </div>
      </nav>

      {isHome === true ? (
        <>
          <div className={styles.content}>
            <h1>Hello, I`m Jasmine!</h1>

            <p style={{ fontWeight: "100" }}>
              McGill CS Student looking for a Software Engineering Internship
            </p>
          </div>
          <IconDown />
        </>
      ) : null}
    </header>
  );
};

export default Header;
