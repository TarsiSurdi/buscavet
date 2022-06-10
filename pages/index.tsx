import { Container } from "@nextui-org/react";
import type { NextPage } from "next";

import { FaHandHoldingMedical, FaBuilding, FaSyringe } from "react-icons/fa";

import { GiFarmer } from "react-icons/gi";
import { RiMedicineBottleFill } from "react-icons/ri";

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
          <NavButton
            text="Medicações"
            icon={<RiMedicineBottleFill />}
            link="/medications"
          />
          <NavButton text="Vacinas" icon={<FaSyringe />} link="/vaccines" />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Veterinários Habilitados"
            icon={<FaHandHoldingMedical />}
            link="/veterinarians"
          />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Cadastrar Empresa"
            icon={<FaBuilding />}
            link="/signup/enterprise"
          />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Cadastrar Produtor"
            icon={<GiFarmer />}
            link="signup/producer"
          />
        </NavGridContainer>
      </Container>
    </Layout>
  );
};

export default Home;
