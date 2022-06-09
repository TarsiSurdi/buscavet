import { FaSyringe } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Vaccines = () => {
  return (
    <Layout
      title="Buscavet - Vacinas"
      url="https://buscavet.vercel.app/vaccines"
    >
      <PageNavigation icon={<FaSyringe />} title="Vacinas" />
    </Layout>
  );
};

export default Vaccines;
