import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import {
  FaArrowRight,
  FaHandHoldingMedical,
  FaBuilding,
  FaSyringe,
} from "react-icons/fa";
import { GiBull, GiFarmer } from "react-icons/gi";
import { RiMedicineBottleFill } from "react-icons/ri";

import styles from "../styles/Home.module.css";

interface HomeProps {
  links: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage<HomeProps> = ({ links }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buscavet</title>

        <meta name="title" content="🐮 Buscavet" />
        <meta
          name="description"
          content="Acesso à informação facilitando a vida do produtor"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://buscavet.vercel.app/" />
        <meta property="og:title" content="🐮 Buscavet" />
        <meta
          property="og:description"
          content="Acesso à informação facilitando a vida do produtor"
        />
        <meta property="og:image" content="/logo.jpg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://buscavet.vercel.app/" />
        <meta property="twitter:title" content="🐮 Buscavet" />
        <meta
          property="twitter:description"
          content="Acesso à informação facilitando a vida do produtor"
        />
        <meta property="twitter:image" content="/logo.jpg" />

        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <GiBull />
        <div>
          <h1>
            Busca<span>vet</span>
          </h1>
          <h3>Facilitando a vida do produtor</h3>
        </div>
      </header>

      <nav className={styles.main}>
        <div className={styles.grid}>
          <Link href="/">
            <div className={styles.card}>
              <h2>
                <RiMedicineBottleFill />
                Medicações
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/">
            <div className={styles.card}>
              <h2>
                <FaSyringe />
                Vacinas
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/">
            <div className={styles.card}>
              <h2>
                <FaHandHoldingMedical />
                Veterinários Habilitados
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/">
            <div className={styles.card}>
              <h2>
                <FaBuilding />
                Cadastrar Empresa
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/">
            <div className={`${styles.card} ${styles.bigCard}`}>
              <h2>
                <GiFarmer />
                Cadastrar Produtor
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>
        </div>
      </nav>

      <footer className={styles.footer}>
        <p>🍪 Esse site não utiliza cookies</p>
      </footer>
    </div>
  );
};

export default Home;
