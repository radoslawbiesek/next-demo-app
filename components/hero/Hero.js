import styles from "./Hero.module.css";

const Hero = () => (
  <>
    <h1 className={styles.hero}>Welcome to the TV Series App</h1>
    <a href="/series" className={styles.link}>
      Browse TV series now
    </a>
  </>
);

export default Hero;
