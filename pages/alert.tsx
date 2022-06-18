import { Container, Image, Link, Text, styled } from "@nextui-org/react";
import { NextPage } from "next";
import { RiAlertFill } from "react-icons/ri";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const StyledSpan = styled("span", { color: "$danger600", fontWeight: "$bold" });

const Alert: NextPage = () => (
  <Layout title="Buscavet - Alerta" url="https://buscavet.vercel.app/alert">
    <Container sm css={{ pb: "$20" }}>
      <PageNavigation icon={<RiAlertFill />} title="Alerta" />
      <Link
        href="https://www.crmvsc.gov.br/pesquisa_abre.aspx?ID=8070"
        css={{
          color: "$danger600",
          fontStyle: "italic",
          pb: "$5",
        }}
      >
        Via CRMV-SC, 15 de junho de 2022
      </Link>
      <Text>
        Casos de{" "}
        <Text
          span
          css={{
            padding: "$1 $4",
            background: "$accents1",
            borderRadius: "$pill",
            fontWeight: "$bold",
            color: "$danger700",
          }}
        >
          Raiva Bovina
        </Text>{" "}
        identificados recentemente no interior de Santa Catarina nos municípios
        de: <StyledSpan>Angelina</StyledSpan>,{" "}
        <StyledSpan>Pedras Grandes</StyledSpan>,{" "}
        <StyledSpan>13 de Maio</StyledSpan> e <StyledSpan>Lontras</StyledSpan>.
      </Text>
      <Image showSkeleton autoResize src="/alerta.jpeg" />
    </Container>
  </Layout>
);

export default Alert;
