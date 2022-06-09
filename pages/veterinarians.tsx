import { FaHandHoldingMedical } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Veterinarians = () => {
  return (
    <Layout
      title="Buscavet - Veterinários"
      url="https://buscavet.vercel.app/veterinarians"
    >
      <PageNavigation
        icon={<FaHandHoldingMedical />}
        title="Veterinários Habilitados"
      />
    </Layout>
  );
};

export default Veterinarians;
