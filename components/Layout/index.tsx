import { ReactNode } from "react";
import Head from "next/head";

import Header from "../Header";
import Footer from "../Footer";
import { Container } from "@nextui-org/react";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
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
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />

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
      </Head>

      <Container fluid css={{ padding: "$0" }}>
        <Header />
        <Container sm as="main">
          {children}
        </Container>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
