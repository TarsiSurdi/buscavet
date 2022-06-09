import { Html, Main, NextScript, Head } from "next/document";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"
          rel="stylesheet"
        />

        <link rel="apple-touch-icon" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" href="/favicons/favicon.ico" />

        <link rel="manifest" href="/manifest.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
