import { Container, Dropdown, Grid, Table } from "@nextui-org/react";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { useState } from "react";
import { SiAddthis } from "react-icons/si";
import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

type Categorias =
  | "Aditivos"
  | "Núcleos"
  | "Prebióticos"
  | "Probióticos"
  | "Suplementos";

interface SupplementsProps {
  items: {
    Aditivos: {
      nomeComercial: string;
      principioAtivo?: string;
    }[];
    Núcleos: {
      nomeComercial: string;
      principioAtivo?: string;
    }[];
    Prebióticos: {
      nomeComercial: string;
      principioAtivo?: string;
    }[];
    Probióticos: {
      nomeComercial: string;
      principioAtivo?: string;
    }[];
    Suplementos: {
      nomeComercial: string;
      principioAtivo?: string;
    }[];
  };
}

export const getStaticProps: GetStaticProps = () => {
  const data: GetStaticPropsResult<SupplementsProps> = {
    props: {
      items: {
        Aditivos: [
          { nomeComercial: "Biosacch TR", principioAtivo: "Prebiótico" },
          { nomeComercial: "DBR", principioAtivo: "Probiótico" },
          { nomeComercial: "Monenzina Sódica" },
          { nomeComercial: "Nutribac" },
          { nomeComercial: "Rumensin", principioAtivo: "Monenzina" },
        ],
        Núcleos: [{ nomeComercial: "Nenhum dado disponível" }],
        Prebióticos: [
          { nomeComercial: "DB equi" },
          { nomeComercial: "DBR Cálcio" },
          { nomeComercial: "Ruminix pó" },
        ],
        Probióticos: [
          { nomeComercial: "Florafort pasta" },
          { nomeComercial: "Lactobac" },
          { nomeComercial: "Bio bac Oral" },
        ],
        Suplementos: [
          { nomeComercial: "ADE Pó", principioAtivo: "Vit A e D3" },
          { nomeComercial: "Adefram", principioAtivo: "Vit A" },
          { nomeComercial: "Adental" },
          { nomeComercial: "Bedoze", principioAtivo: "Vit B12" },
          { nomeComercial: "Bio Hoof" },
          { nomeComercial: "Bioforte" },
          { nomeComercial: "Bovigold Pasto" },
          { nomeComercial: "Bovigold Plus" },
          { nomeComercial: "Bovigold Prima" },
        ],
      },
    },
  };

  return data;
};

const Supplements: NextPage<SupplementsProps> = ({ items }) => {
  const [selected, setSelected] = useState(
    new Set(["Suplementos" as Categorias])
  );

  const getSupplements = (keys: Set<string>) => {
    const key = Array.from(keys)[0];

    return items[key as Categorias].map((item, index) => (
      <Table.Row key={index}>
        <Table.Cell>{item.nomeComercial}</Table.Cell>
        <Table.Cell>
          {item.principioAtivo ? item.principioAtivo : "Desconhecido"}
        </Table.Cell>
      </Table.Row>
    ));
  };

  return (
    <Layout
      title="Buscavet - Suplementos"
      url="https://buscavet.vercel.app/supplements"
    >
      <Container sm>
        <PageNavigation icon={<SiAddthis />} title="Suplementos" />
        <Grid.Container direction="column" gap={1}>
          <Grid>
            <Dropdown>
              <Dropdown.Button flat>{selected}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Selecione um tipo de aditivo"
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
                }}
              >
                <Dropdown.Item key="Aditivos">Aditivos</Dropdown.Item>
                <Dropdown.Item key="Núcleos">Núcleos</Dropdown.Item>
                <Dropdown.Item key="Prebióticos">Prebióticos</Dropdown.Item>
                <Dropdown.Item key="Probióticos">Probióticos</Dropdown.Item>
                <Dropdown.Item key="Suplementos">Suplementos</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
          <Grid>
            <Table
              aria-label="Tabela de suplementos"
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
                <Table.Column css={{ tt: "uppercase" }}>
                  Princípio Ativo
                </Table.Column>
              </Table.Header>
              <Table.Body>{getSupplements(selected)}</Table.Body>
              <Table.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={5}
                onPageChange={(page) => console.log(page)}
              />
            </Table>
          </Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default Supplements;
