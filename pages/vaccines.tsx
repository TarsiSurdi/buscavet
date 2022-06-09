import { FaSyringe } from "react-icons/fa";
import Layout from "../components/Layout";

const Vaccines = () => {
  return (
    <Layout
      title="Buscavet - Vacinas"
      url="https://buscavet.vercel.app/vaccines"
    >
      <FaSyringe />
      <h1>Vacinas</h1>
    </Layout>
  );
};

export default Vaccines;
