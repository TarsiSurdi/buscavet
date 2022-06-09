import { ReactNode } from "react";
import Head from "next/head";

import Header from "../Header";

import styles from "./Layout.module.scss";
import Footer from "../Footer";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  url: string;
}

const Layout = ({
  children,
  title = "🐮 Buscavet",
  description = "Facilitando a vida do produtor",
  url = "https://buscavet.vercel.app/",
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="/logo.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="/logo.jpg" />

        <meta name="theme-color" content="#000000" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" href="/favicons/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
