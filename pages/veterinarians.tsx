import { FaHandHoldingMedical } from "react-icons/fa";
import Layout from "../components/Layout";

const Veterinarians = () => {
  return (
    <Layout
      title="Buscavet - Veterinários"
      url="https://buscavet.vercel.app/veterinarians"
    >
      <FaHandHoldingMedical />
      <h1>Veterinários</h1>
    </Layout>
  );
};

export default Veterinarians;
