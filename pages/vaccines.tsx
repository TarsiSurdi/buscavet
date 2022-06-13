import { Container, Dropdown, Grid, Table } from "@nextui-org/react";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { useState } from "react";
import { FaSyringe } from "react-icons/fa";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

type Categorias = "Brucelose" | "Raiva" | "Clostridiose" | "IBR-BVD";

interface VaccinesProps {
  items: {
    Brucelose: {
      nomeComercial: string;
    }[];
    Raiva: {
      nomeComercial: string;
    }[];
    Clostridiose: {
      nomeComercial: string;
    }[];
    "IBR-BVD": {
      nomeComercial: string;
    }[];
  };
}

export const getStaticProps: GetStaticProps = () => {
  const data: GetStaticPropsResult<VaccinesProps> = {
    props: {
      items: {
        Brucelose: [
          { nomeComercial: "Brucel-vet" },
          { nomeComercial: "Anavac 19" },
          { nomeComercial: "Brucelina B-19" },
          { nomeComercial: "RB-51" },
        ],
        Raiva: [
          { nomeComercial: "Raivacel multi" },
          { nomeComercial: "Ourovac Raiva" },
          { nomeComercial: "Alurabiffa" },
          { nomeComercial: "Bioraiva" },
          { nomeComercial: "Rabatvac" },
        ],
        Clostridiose: [
          { nomeComercial: "Bayovac" },
          { nomeComercial: "Botulinomax" },
          { nomeComercial: "Bocilis poli-star T" },
          { nomeComercial: "Hertamax" },
          { nomeComercial: "Crbun-vet" },
          { nomeComercial: "Cultivac 6" },
          { nomeComercial: "Sintoxan Polivalente" },
        ],
        "IBR-BVD": [
          { nomeComercial: "IBR-BVD" },
          { nomeComercial: "Hiprabovis" },
          { nomeComercial: "Fertiguard Selenium Max" },
          { nomeComercial: "Poliguard" },
          { nomeComercial: "Bayovac Reprodução 15" },
        ],
      },
    },
  };

  return data;
};

const Vaccines: NextPage<VaccinesProps> = ({ items }) => {
  const [selected, setSelected] = useState(
    new Set(["Clostridiose" as Categorias])
  );
  const [page, setPage] = useState(1);

  const getVaccines = (keys: Set<string>) => {
    const key = Array.from(keys)[0];

    return items[key as Categorias].map((item, index) => (
      <Table.Row key={index}>
        <Table.Cell>{item.nomeComercial}</Table.Cell>
      </Table.Row>
    ));
  };

  return (
    <Layout
      title="Buscavet - Vacinas"
      url="https://buscavet.vercel.app/vaccines"
    >
      <Container sm css={{ pb: "$20" }}>
        <PageNavigation icon={<FaSyringe />} title="Vacinas" />
        <Grid.Container direction="column" gap={1}>
          <Grid>
            <Dropdown>
              <Dropdown.Button flat>{selected}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Selecione uma doença"
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={selected}
                onSelectionChange={(keys) => {
                  setSelected(
                    new Set([
                      Array.from(keys)
                        .join(", ")
                        .replaceAll("_", "") as Categorias,
                    ])
                  );
                  setPage(1);
                }}
              >
                <Dropdown.Item key="Brucelose">Brucelose</Dropdown.Item>
                <Dropdown.Item key="Raiva">Raiva</Dropdown.Item>
                <Dropdown.Item key="Clostridiose">Clostridiose</Dropdown.Item>
                <Dropdown.Item key="IBR-BVD">IBR-BVD</Dropdown.Item>
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
                <Table.Column css={{ tt: "uppercase" }}>
                  Nome Comercial
                </Table.Column>
              </Table.Header>
              <Table.Body>{getVaccines(selected)}</Table.Body>
              <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={5}
                page={page}
                onPageChange={setPage}
                total={Math.ceil(getVaccines(selected).length / 5)}
              />
            </Table>
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default Vaccines;
