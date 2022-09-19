import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyles } from "../components/styles/Global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chat Project</title>
        <meta name="description" content="chat application" />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
