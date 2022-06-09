import { GiFarmer } from "react-icons/gi";
import Layout from "../../components/Layout";
import PageNavigation from "../../components/PageNavigation";

const Producer = () => {
  return (
    <Layout
      title="Buscavet - Cadastrar Produtor"
      url="https://buscavet.vercel.app/signup/producer"
    >
      <PageNavigation icon={<GiFarmer />} title="Cadastrar Produtor" />
    </Layout>
  );
};

export default Producer;
