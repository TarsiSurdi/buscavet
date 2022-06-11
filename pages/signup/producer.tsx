import { Container } from "@nextui-org/react";
import { GiFarmer } from "react-icons/gi";
import Layout from "../../components/Layout";
import PageNavigation from "../../components/PageNavigation";

const Producer = () => {
  return (
    <Layout
      title="Buscavet - Cadastrar Produtor"
      url="https://buscavet.vercel.app/signup/producer"
    >
      <Container sm>
        <PageNavigation icon={<GiFarmer />} title="Cadastrar Produtor" />
      </Container>
    </Layout>
  );
};

export default Producer;
