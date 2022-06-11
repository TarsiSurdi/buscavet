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
      <Container sm>
        <PageNavigation icon={<RiMedicineBottleFill />} title="Medicações" />
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>ROLE</Table.Column>
            <Table.Column>STATUS</Table.Column>
          </Table.Header>
          <Table.Body>
            <Table.Row key="1">
              <Table.Cell>Tony Reichert</Table.Cell>
              <Table.Cell>CEO</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="2">
              <Table.Cell>Zoey Lang</Table.Cell>
              <Table.Cell>Technical Lead</Table.Cell>
              <Table.Cell>Paused</Table.Cell>
            </Table.Row>
            <Table.Row key="3">
              <Table.Cell>Jane Fisher</Table.Cell>
              <Table.Cell>Senior Developer</Table.Cell>
              <Table.Cell>Active</Table.Cell>
            </Table.Row>
            <Table.Row key="4">
              <Table.Cell>William Howard</Table.Cell>
              <Table.Cell>Community Manager</Table.Cell>
              <Table.Cell>Vacation</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Container>
    </Layout>
  );
};

export default Medications;
