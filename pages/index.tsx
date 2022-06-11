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
      <Container sm gap={2} css={{ mt: "$10", pb: "$20" }}>
        <NavGridContainer>
          <NavButton
            text="Medicações"
            icon={<RiMedicineBottleFill size="1.25em" />}
            link="/medications"
          />
          <NavButton
            text="Vacinas"
            icon={<FaSyringe size="1.25em" />}
            link="/vaccines"
          />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Veterinários Habilitados"
            icon={<FaHandHoldingMedical size="1.25em" />}
            link="/veterinarians"
          />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Cadastrar Empresa"
            icon={<FaBuilding size="1.25em" />}
            link="/signup/enterprise"
          />
        </NavGridContainer>
        <NavGridContainer>
          <NavButton
            text="Cadastrar Produtor"
            icon={<GiFarmer size="1.25em" />}
            link="signup/producer"
          />
        </NavGridContainer>
      </Container>
    </Layout>
  );
};

export default Home;
