import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
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
import { MdError } from "react-icons/md";

import Layout from "../components/Layout";
import NavButton from "../components/NavButton";
import NavGridContainer from "../components/NavGridContainer";

const Home: NextPage = () => {
  return (
    <Layout
      title="Buscavet"
      description="Facilitando a vida do produtor"
      url="https://buscavet.vercel.app"
    >
      <Container sm gap={2} css={{ mt: "$10" }}>
        <NavGridContainer>
          <NavButton text="Medicações" icon={<RiMedicineBottleFill />} />
          <NavButton text="Vacinas" icon={<FaSyringe />} />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Veterinários Habilitados"
            icon={<FaHandHoldingMedical />}
          />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton text="Cadastrar Empresa" icon={<FaBuilding />} />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton text="Cadastrar Produtor" icon={<GiFarmer />} />
        </NavGridContainer>
      </Container>
    </Layout>
  );
};

export default Home;
