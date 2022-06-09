import { GiFarmer } from "react-icons/gi";
import Layout from "../../components/Layout";

const Producer = () => {
  return (
    <Layout
      title="Buscavet - Cadastrar Produtor"
      url="https://buscavet.vercel.app/signup/producer"
    >
      <GiFarmer />
      <h1>Cadastrar Produtor</h1>
    </Layout>
  );
};

export default Producer;
