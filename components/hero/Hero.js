import Link from "next/link";

import styles from "./Hero.module.css";

const Hero = () => (
  <>
    <h1 className={styles.hero}>Welcome to the TV Series App</h1>
    <Link href="/series" >
      <a className={styles.link}>Browse TV series now</a>
    </Link>
  </>
);

export default Hero;
