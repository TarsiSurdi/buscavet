import { Collapse, Container, Text } from "@nextui-org/react";
import { FaHandHoldingMedical } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

const Veterinarians = () => {
  return (
    <Layout
      title="Buscavet - Veterinários"
      url="https://buscavet.vercel.app/veterinarians"
    >
      <Container sm css={{ "pb": "$20"}}>
        <PageNavigation
          icon={<FaHandHoldingMedical />}
          title="Veterinários Habilitados"
        />
          <Collapse.Group bordered>
            <Collapse title="Julia Ellen">
              <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
              </Text>
            </Collapse>
          </Collapse.Group>
      </Container>
    </Layout>
  );
};

export default Veterinarians;
