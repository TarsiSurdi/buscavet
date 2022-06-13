import { Container, Table } from "@nextui-org/react";
import { NextPage } from "next";

import { MdCleanHands } from "react-icons/md";

import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Disinfectants: NextPage = () => {
  return (
    <Layout
      title="Buscavet - Desinfetantes"
      url="https://buscavet.vercel.app/disinfectants"
    >
      <Container sm>
        <PageNavigation icon={<MdCleanHands />} title="Desinfetantes" />
        <Table
          aria-label="Tabela de desinfetantes"
          bordered
          css={{
            height: "calc($space$14 * 8)",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column css={{ tt: "uppercase" }}>
              Nome Comercial
            </Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>ACH-80 Desinfetante </Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Biofor/Iodo</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Mastite proteção banho de tetos</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>Pradovilate</Table.Cell>
            </Table.Row>
            <Table.Row key="5">
              <Table.Cell>Quatermon</Table.Cell>
            </Table.Row>
            <Table.Row key="6">
              <Table.Cell>Quatermon 30%</Table.Cell>
            </Table.Row>
            <Table.Row key="7">
              <Table.Cell>Quatermon 50%</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={5}
            onPageChange={(page) => console.log(page)}
          />
        </Table>
      </Container>
    </Layout>
  );
};

export default Disinfectants;
