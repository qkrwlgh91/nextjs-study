import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../components/layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        {/* <meta name='next-head-count' content='2' /> */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
