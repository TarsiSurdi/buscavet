import { RiMedicineBottleFill } from "react-icons/ri";
import Layout from "../components/Layout";

const Medications = () => {
  return (
    <Layout
      title="Buscavet - Medicações"
      url="https://buscavet.vercel.app/medications"
    >
      <RiMedicineBottleFill />
      <h1>Medicações</h1>
    </Layout>
  );
};

export default Medications;
