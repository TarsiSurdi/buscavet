import { Container, Input, Grid } from "@nextui-org/react";
import { FaBuilding } from "react-icons/fa";
import Layout from "../../components/Layout";
import PageNavigation from "../../components/PageNavigation";

const Enterprise = () => {
  return (
    <Layout
      title="Buscavet - Cadastrar Empresa"
      url="https://buscavet.vercel.app/signup/enterprise"
    >
      <Container sm css={{ pb: "$20" }}>
        <PageNavigation icon={<FaBuilding />} title="Cadastrar Empresa" />
        <Grid.Container gap={3} direction="column">
          <Grid>
            <Input
              css={{ width: "100%" }}
              clearable
              bordered
              labelPlaceholder="Nome da Empresa"
            />
          </Grid>
          <Grid>
            <Input
              css={{ width: "100%" }}
              clearable
              bordered
              labelPlaceholder="Nome da Medicação"
            />
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default Enterprise;
