import Layout from "../components/layout/Layout";

import '../styles/global.css';

// persisting layout between page changes
// keeping state when navigating
// add global css

const app = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default app;
