import { RiMedicineBottleFill } from "react-icons/ri";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Medications = () => {
  return (
    <Layout
      title="Buscavet - Medicações"
      url="https://buscavet.vercel.app/medications"
    >
      <PageNavigation icon={<RiMedicineBottleFill />} title="Medicações" />
    </Layout>
  );
};

export default Medications;
