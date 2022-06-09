import { FaBuilding } from "react-icons/fa";
import Layout from "../../components/Layout";
import PageNavigation from "../../components/PageNavigation";

const Enterprise = () => {
  return (
    <Layout
      title="Buscavet - Cadastrar Empresa"
      url="https://buscavet.vercel.app/signup/enterprise"
    >
      <PageNavigation icon={<FaBuilding />} title="Cadastrar Empresa" />
    </Layout>
  );
};

export default Enterprise;
