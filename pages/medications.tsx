import { Container, Dropdown, Grid, Table } from "@nextui-org/react";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { useMemo, useState } from "react";
import { RiMedicineBottleFill } from "react-icons/ri";

import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

interface MedicationsProps {
  items: {
    anestesicos: {
      colunas: string[];
      items: {
        nomeComercial?: string;
        principioAtivo: string;
      }[];
    };
  };
}

export const getStaticProps: GetStaticProps = (ctx) => {
  const data: GetStaticPropsResult<MedicationsProps> = {
    props: {
      items: {
        anestesicos: {
          colunas: ["Princípio Ativo", "Nome Comercial"],
          items: [
            { principioAtivo: "Propofol" },
            { principioAtivo: "Tiopental" },
            { principioAtivo: "Alotano" },
            { principioAtivo: "Isoflurano" },
            { principioAtivo: "Cevoflurano" },
            { nomeComercial: "Anestésico Bravet", principioAtivo: "Lidocaína" },
            { nomeComercial: "Anestex", principioAtivo: "Lidocaína" },
            { nomeComercial: "Lidofarm", principioAtivo: "Lidocaína" },
            { principioAtivo: "Atipamezol" },
            { principioAtivo: "Iombina" },
            { principioAtivo: "Naltrexona" },
            { nomeComercial: "Acedan", principioAtivo: "Acepromazina" },
            { principioAtivo: "Acepran (1%)" },
            { nomeComercial: "Calmiun", principioAtivo: "Xilazina" },
            { nomeComercial: "Dopaser", principioAtivo: "Xilazina" },
            { nomeComercial: "Detomidin", principioAtivo: "Detomidina" },
            { nomeComercial: "Detovet", principioAtivo: "Detomidina" },
            {
              nomeComercial: "Aceproven Injetável",
              principioAtivo: "Acepromazina",
            },
          ],
        },
      },
    },
  };

  return data;
};

const Medications: NextPage<MedicationsProps> = ({ items }) => {
  const [selected, setSelected] = useState(
    new Set(["Selecione uma medicação"])
  );

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <Layout
      title="Buscavet - Medicações"
      url="https://buscavet.vercel.app/medications"
    >
      <Container sm css={{ pb: "$20" }}>
        <PageNavigation icon={<RiMedicineBottleFill />} title="Medicações" />
        <Grid.Container direction="column" gap={1}>
          <Grid>
            <Dropdown>
              <Dropdown.Button flat>{selectedValue}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Static Actions"
                // disabledKeys={["Antissépticos"]}
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="Anestésicos">Anestésicos</Dropdown.Item>
                <Dropdown.Item key="Antissépticos">Antissépticos</Dropdown.Item>
                <Dropdown.Section title="Cardiovasculares">
                  <Dropdown.Item key="Antiarrítmicos">
                    Antiarrítmicos
                  </Dropdown.Item>
                  <Dropdown.Item key="Inotrópicos">Inotrópicos</Dropdown.Item>
                  <Dropdown.Item key="Vasculares">Vasculares</Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section title="Dermatológicos">
                  <Dropdown.Item key="Antipapilomatosos">
                    Antipapilomatosos
                  </Dropdown.Item>
                  <Dropdown.Item key="Cicatrizantes">
                    Cicatrizantes
                  </Dropdown.Item>
                  <Dropdown.Item key="Dermatológicos">
                    Dermatológicos
                  </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Item key="Anticoagulantes">
                  Anticoagulantes
                </Dropdown.Item>
                <Dropdown.Item key="Hemostáticos">Hemostáticos</Dropdown.Item>
                <Dropdown.Section title="Neurológicos">
                  <Dropdown.Item key="Ansiolíticos">Ansiolíticos</Dropdown.Item>
                  <Dropdown.Item key="Anticonvulsivantes">
                    Anticonvulsivantes
                  </Dropdown.Item>
                  <Dropdown.Item key="Antiespasmódicos">
                    Antiespasmódicos
                  </Dropdown.Item>
                  <Dropdown.Item key="Relaxantes Musculares">
                    Relaxantes Musculares
                  </Dropdown.Item>
                </Dropdown.Section>
                <Dropdown.Section>
                  <Dropdown.Item key="Intramamários">
                    Intramamários
                  </Dropdown.Item>
                  <Dropdown.Item key="Broncodilatadores">
                    Broncodilatadores
                  </Dropdown.Item>
                  <Dropdown.Item key="Urinários">Urinários</Dropdown.Item>
                  <Dropdown.Item key="Outros">Outros...</Dropdown.Item>
                </Dropdown.Section>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
          <Grid>
            <Table
              aria-label="Tabela de medicações"
              bordered
              css={{
                height: "calc($space$14 * 8)",
                minWidth: "100%",
              }}
            >
              <Table.Header>
                {items.anestesicos.colunas.map((coluna) => (
                  <Table.Column key={coluna} css={{ tt: "uppercase" }}>
                    {coluna}
                  </Table.Column>
                ))}
              </Table.Header>
              <Table.Body>
                {items.anestesicos.items.map((item, index) => (
                  <Table.Row key={index}>
                    <Table.Cell>{item.principioAtivo}</Table.Cell>
                    <Table.Cell>
                      {item.nomeComercial ? item.nomeComercial : "Vários"}
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
              <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={5}
                // onPageChange={(page) => console.log({ page })}
              />
            </Table>
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default Medications;
