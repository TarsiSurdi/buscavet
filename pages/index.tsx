import type { NextPage, GetStaticProps } from "next";
import Link from "next/link";

import {
  FaArrowRight,
  FaHandHoldingMedical,
  FaBuilding,
  FaSyringe,
} from "react-icons/fa";

import { GiFarmer } from "react-icons/gi";
import { RiMedicineBottleFill } from "react-icons/ri";
import Layout from "../components/Layout";

import styles from "../styles/Home.module.scss";

interface HomeProps {
  links: string[];
}

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  };
};

const Home: NextPage<HomeProps> = () => {
  return (
    <Layout
      title="Buscavet"
      description="Facilitando a vida do produtor"
      url="https://buscavet.vercel.app"
    >
      <nav className={styles.main}>
        <div className={styles.grid}>
          <Link href="/medications">
            <div className={styles.card}>
              <h2>
                <RiMedicineBottleFill />
                Medicações
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/vaccines">
            <div className={styles.card}>
              <h2>
                <FaSyringe />
                Vacinas
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/veterinarians">
            <div className={styles.card}>
              <h2>
                <FaHandHoldingMedical />
                Veterinários Habilitados
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/signup/enterprise">
            <div className={styles.card}>
              <h2>
                <FaBuilding />
                Cadastrar Empresa
              </h2>
              <FaArrowRight size={25} className={styles.arrow} />
            </div>
          </Link>

          <Link href="/signup/producer">
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
    </Layout>
  );
};

export default Home;
