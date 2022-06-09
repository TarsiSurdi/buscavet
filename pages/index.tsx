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
        <meta
          name="description"
          content="Acesso à informação facilitando a vida do produtor"
        />

        <meta
          property="og:description"
          content="Facilitando a vida do produtor"
        />

        <meta property="og:title" content="🐮 Buscavet" />

        <meta property="og:Image" content="/logo.jpg" />

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
