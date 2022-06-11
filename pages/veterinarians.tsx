import { Container } from "@nextui-org/react";
import { FaHandHoldingMedical } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Veterinarians = () => {
  return (
    <Layout
      title="Buscavet - Veterinários"
      url="https://buscavet.vercel.app/veterinarians"
    >
      <Container sm>
        <PageNavigation
          icon={<FaHandHoldingMedical />}
          title="Veterinários Habilitados"
        />
      </Container>
    </Layout>
  );
};

export default Veterinarians;
