import Layout from "../components/layout/Layout";

import './index.css';

const app = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default app;
