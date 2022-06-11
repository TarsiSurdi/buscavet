import { Container, Table } from "@nextui-org/react";
import { RiMedicineBottleFill } from "react-icons/ri";

import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Medications = () => {
  return (
    <Layout
      title="Buscavet - Medicações"
      url="https://buscavet.vercel.app/medications"
    >
      <Container sm css={{ pb: "$20" }}>
        <PageNavigation icon={<RiMedicineBottleFill />} title="Medicações" />
        <Table
          aria-label="Example table with static content"
          css={{
            height: "calc($space$14 * 8)",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>ROLE</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="5">
              <Table.Cell>Tarcísio Surdi</Table.Cell>
              <Table.Cell>Next.js Developer</Table.Cell>
            </Table.Row>
            <Table.Row key="6">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="7">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="8">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="9">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="10">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="11">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
            <Table.Row key="12">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
            </Table.Row>
          </Table.Body>
          <Table.Pagination
            shadow
            noMargin
            align="center"
            rowsPerPage={5}
            onPageChange={(page) => console.log({ page })}
          />
        </Table>
      </Container>
    </Layout>
  );
};

export default Medications;
