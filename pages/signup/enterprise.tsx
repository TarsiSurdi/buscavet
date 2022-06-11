import { Container } from "@nextui-org/react";
import { FaBuilding } from "react-icons/fa";
import Layout from "../../components/Layout";
import PageNavigation from "../../components/PageNavigation";

const Enterprise = () => {
  return (
    <Layout
      title="Buscavet - Cadastrar Empresa"
      url="https://buscavet.vercel.app/signup/enterprise"
    >
      <Container sm>
        <PageNavigation icon={<FaBuilding />} title="Cadastrar Empresa" />
      </Container>
    </Layout>
  );
};

export default Enterprise;
