import styles from "./Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    © 2021 TV Series. All rights reserved.{" "}
    <a className={styles.link} href="https://www.themoviedb.org/">All data provided by TMDB.</a>
  </footer>
);

export default Footer;
