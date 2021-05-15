import Head from 'next/head';

import Footer from "../footer/Footer";
import Header from "../header/Header";

import styles from './Layout.module.scss';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Head>
        <title>TV Series</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header />
    <div className={styles.container}>
        {children}
    </div>
    <Footer />
  </div>
);

export default Layout;
