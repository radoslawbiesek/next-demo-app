import Layout from "../components/layout/Layout";

import '../styles/global.css';

const app = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default app;
