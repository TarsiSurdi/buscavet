import { Container, Dropdown, Grid, Table } from "@nextui-org/react";
import { GetStaticProps, GetStaticPropsResult, NextPage } from "next";
import { useEffect, useState } from "react";
import { RiMedicineBottleFill } from "react-icons/ri";

import Layout from "../components/Layout";
import PageNavigation from "../components/PageNavigation";

type Categorias =
  | "Anestésicos"
  | "Antissépticos"
  | "Antiarrítmicos"
  | "Inotrópicos"
  | "Vasculares"
  | "Antipapilomatosos"
  | "Cicatrizantes"
  | "Dermatológicos"
  | "Anticoagulantes"
  | "Hemostáticos"
  | "Anticonvulsivantes"
  | "Antiespasmódicos"
  | "Relaxantes Musculares"
  | "Intramamários"
  | "Outros"
  | "Broncodilatadores"
  | "Urinários";

interface MedicationsProps {
  items: {
    Anestésicos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Antissépticos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Antiarrítmicos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Inotrópicos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Vasculares: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Antipapilomatosos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Cicatrizantes: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Dermatológicos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Anticoagulantes: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Hemostáticos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Ansiolíticos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Anticonvulsivantes: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Antiespasmódicos: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    "Relaxantes Musculares": {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Intramamários: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Outros: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Broncodilatadores: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
    Urinários: {
      nomeComercial?: string;
      principioAtivo: string;
    }[];
  };
}

export const getStaticProps: GetStaticProps = () => {
  const data: GetStaticPropsResult<MedicationsProps> = {
    props: {
      items: {
        Anestésicos: [
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
        Antissépticos: [
          { principioAtivo: "Azul de metileno" },
          { principioAtivo: "Clorexidina" },
          { principioAtivo: "Clorexidina", nomeComercial: "Diprodeep" },
          {
            principioAtivo: "Monometilol dimetil hidantoína",
            nomeComercial: "Formoped",
          },
          { principioAtivo: "Clorexidina", nomeComercial: "Furanil" },
          { principioAtivo: "Desconhecido", nomeComercial: "Iodo Farm" },
          {
            principioAtivo: "Desconhecido",
            nomeComercial: "Pasta para ordenha",
          },
          { principioAtivo: "Desconhecido", nomeComercial: "Umbicura" },
        ],
        Antiarrítmicos: [
          { principioAtivo: "Amiodarona" },
          { principioAtivo: "Digitoxina" },
          { principioAtivo: "Procaínamida" },
        ],
        Inotrópicos: [{ principioAtivo: "Cloridrato de Verapamil" }],
        Vasculares: [
          { principioAtivo: "Cloridrato de dopamina" },
          { principioAtivo: "Diltiazem" },
          { principioAtivo: "Ramipril" },
        ],
        Antipapilomatosos: [
          { principioAtivo: "Clorobutanol", nomeComercial: "Verrudel" },
        ],
        Cicatrizantes: [
          { principioAtivo: "Óxido de zinco", nomeComercial: "Alantol" },
          {
            principioAtivo: "Desconhecido",
            nomeComercial: "Matabicheira LAB ",
          },
          { principioAtivo: "Desconhecido", nomeComercial: "Pomada Prado" },
          {
            principioAtivo: "Desconhecido",
            nomeComercial: "Unguento Plus aerosol",
          },
          { principioAtivo: "Desconhecido", nomeComercial: "Unguento Pearson" },
        ],
        Dermatológicos: [
          { principioAtivo: "Cicatrizantol" },
          { principioAtivo: "Clorexidina", nomeComercial: "Organnact Prata" },
        ],
        Anticoagulantes: [
          { principioAtivo: "Dalteparina" },
          { principioAtivo: "Heparina sódica" },
          { principioAtivo: "Varfarina sódica" },
        ],
        Hemostáticos: [{ principioAtivo: "Ácido Tranexâmico" }],
        Ansiolíticos: [
          { principioAtivo: "Diazepam" },
          { principioAtivo: "Midazolam" },
        ],
        Anticonvulsivantes: [
          { principioAtivo: "Gabapentina" },
          { principioAtivo: "Fenitoína sódica" },
        ],
        Antiespasmódicos: [{ principioAtivo: "Sulfato de atropina" }],
        "Relaxantes Musculares": [
          { principioAtivo: "Desconhecido", nomeComercial: "Geloflex" },
          { principioAtivo: "Metocarbamol" },
          { principioAtivo: "Xilazin" },
        ],
        Intramamários: [
          { nomeComercial: "Biomast selante", principioAtivo: "Desconhecido" },
          { nomeComercial: "Intrasec VS", principioAtivo: "Desconhecido" },
          { nomeComercial: "Mastclin", principioAtivo: "Desconhecido" },
          {
            nomeComercial: "Mastite Clínica VL",
            principioAtivo: "Desconhecido",
          },
          { nomeComercial: "Sela teto", principioAtivo: "Desconhecido" },
        ],
        Outros: [
          { principioAtivo: "Ocitocina" },
          { principioAtivo: "Desconhecido", nomeComercial: "Óleo Canforado" },
          { principioAtivo: "Tristezina" },
        ],
        Broncodilatadores: [
          { principioAtivo: "Clembuterol" },
          { principioAtivo: "Salbutamol" },
          { principioAtivo: "Teofilina" },
        ],
        Urinários: [
          { principioAtivo: "Furosemida", nomeComercial: "Diurax" },
          { principioAtivo: "Furosemida" },
          { principioAtivo: "Manitol" },
        ],
      },
    },
  };

  return data;
};

const Medications: NextPage<MedicationsProps> = ({ items }) => {
  const [selected, setSelected] = useState(new Set(["Anestésicos"]));
  const [page, setPage] = useState(1);

  const getMedications = (keys: Set<string>) => {
    const key = Array.from(keys)[0];

    const tableRows = items[key as Categorias].map((item, index) => (
      <Table.Row key={index}>
        <Table.Cell>{item.principioAtivo}</Table.Cell>
        <Table.Cell>
          {item.nomeComercial ? item.nomeComercial : "Vários"}
        </Table.Cell>
      </Table.Row>
    ));

    return (
      <Table
        aria-label="Tabela de medicações"
        bordered
        css={{
          height: "calc($space$14 * 8)",
          minWidth: "100%",
        }}
      >
        <Table.Header>
          <Table.Column css={{ tt: "uppercase" }}>Princípio Ativo</Table.Column>
          <Table.Column css={{ tt: "uppercase" }}>Nome Comercial</Table.Column>
        </Table.Header>
        <Table.Body>{tableRows}</Table.Body>
        <Table.Pagination
          shadow
          noMargin
          align="center"
          rowsPerPage={5}
          page={page}
          onPageChange={setPage}
          total={Math.ceil(tableRows.length / 5)}
        />
      </Table>
    );
  };

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
              <Dropdown.Button flat>{selected}</Dropdown.Button>
              <Dropdown.Menu
                aria-label="Selecione uma medicação"
                selectionMode="single"
                disallowEmptySelection
                selectedKeys={selected}
                onSelectionChange={(keys) => {
                  setPage(1);
                  setSelected(
                    new Set([Array.from(keys).join(", ").replaceAll("_", "")])
                  );
                }}
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
          <Grid>{getMedications(selected)}</Grid>
        </Grid.Container>
      </Container>
    </Layout>
  );
};

export default Medications;
