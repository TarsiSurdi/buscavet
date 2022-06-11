import { Container } from "@nextui-org/react";
import { FaSyringe } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Vaccines = () => {
  return (
    <Layout
      title="Buscavet - Vacinas"
      url="https://buscavet.vercel.app/vaccines"
    >
      <Container sm>
        <PageNavigation icon={<FaSyringe />} title="Vacinas" />
      </Container>
    </Layout>
  );
};

export default Vaccines;
