import { Avatar, Collapse, Container, Grid, Text } from "@nextui-org/react";
import { FaHandHoldingMedical } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";
import StyledBadge from "../components/Badge";

const Veterinarians = () => {
  return (
    <Layout
      title="Buscavet - Veterinários"
      url="https://buscavet.vercel.app/veterinarians"
    >
      <Container sm css={{ pb: "$20" }}>
        <PageNavigation
          icon={<FaHandHoldingMedical />}
          title="Veterinários Habilitados"
        />
        <Collapse.Group bordered>
          <Collapse
            title="Igor Augusto Louvatel"
            contentLeft={<Avatar squared src="./avatars/igor_louvatel.jpg" />}
          >
            <Text>
              Graduado em Medicina Veterinária pela Universidade do Oeste de
              Santa Catarina.
            </Text>
            <Text>
              Habilitações para exame:
              <StyledBadge type="brucelose">Brucelose</StyledBadge>
              <StyledBadge type="tuberculose">tuberculose</StyledBadge>
            </Text>
          </Collapse>
          <Collapse
            title="Julia Ellen"
            contentLeft={<Avatar squared src="./avatars/julia_ellen.jpg" />}
          >
            <Text>
              Graduada em Medicina Veterinária pela Universidade do Oeste de
              Santa Catarina.
            </Text>
            <Text>
              Habilitações para exame:
              <StyledBadge type="brucelose">Brucelose</StyledBadge>
              <StyledBadge type="tuberculose">tuberculose</StyledBadge>
            </Text>
          </Collapse>
          <Collapse
            title="Rodrigo Zanini"
            contentLeft={<Avatar squared src="./avatars/rodrigo_zanini.jpg" />}
          >
            <Text>
              Graduado em Medicina Veterinária pela Universidade do Oeste de
              Santa Catarina.
            </Text>
            <Text>
              Habilitações para exame:
              <StyledBadge type="brucelose">Brucelose</StyledBadge>
              <StyledBadge type="tuberculose">tuberculose</StyledBadge>
            </Text>
          </Collapse>
          <Collapse
            title="Thiago Miranda"
            contentLeft={<Avatar squared src="./avatars/thiago_miranda.jpg" />}
          >
            <Text>
              Graduado em Medicina Veterinária pela Universidade do Oeste de
              Santa Catarina.
            </Text>
            <Text>
              Habilitações para exame:
              <StyledBadge type="brucelose">Brucelose</StyledBadge>
              <StyledBadge type="tuberculose">tuberculose</StyledBadge>
            </Text>
          </Collapse>
          <Collapse
            title="Eloisa Lopes"
            contentLeft={<Avatar squared src="./avatars/eloisa_lopes.jpg" />}
          >
            <Text>
              Graduada em Medicina Veterinária pela Universidade do Oeste de
              Santa Catarina.
            </Text>
            <Text>
              Habilitações para exame:
              <StyledBadge type="brucelose">Brucelose</StyledBadge>
              <StyledBadge type="tuberculose">tuberculose</StyledBadge>
            </Text>
          </Collapse>
        </Collapse.Group>
      </Container>
    </Layout>
  );
};

export default Veterinarians;
