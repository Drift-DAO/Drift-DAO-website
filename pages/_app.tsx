import "../styles/globals.css";
import Head from "next/head";
import type { AppProps } from "next/app";
import Navbar from "../components/layout/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Drift-DAO</title>
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="A unified platform for all your DAOs."
        />
        <meta
          name="description"
          content="A platform for the next generation to manage all your DAOs."
        />
        <meta
          name="keywords"
          content="DAO, DAOs, Drift, drift dao, Drift-DAO, DAO tooling, DAO platform, tooling, platform, deependu, Deependu Jha, Nitesh, Nitesh Kumar, Ethereum, Polygon, Solana, Near, social abstraction, push notification"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Drift-DAO" />
        <meta
          name="twitter:description"
          content="A unified platform for all your DAOs."
        />
        <meta name="twitter:image" content="/images/logo/drift-logo.png" />

        <meta
          property="og:description"
          content="A unified platform for all your DAOs."
        />
        <meta property="og:title" content="Drift-DAO" />
        <meta property="og:image" content="/images/logo/drift-logo.png" />
        <meta property="og:url" content="https://www.drift-dao.com/" />
      </Head>

      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
