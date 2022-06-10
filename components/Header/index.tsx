import { Grid, Spacer, Text } from "@nextui-org/react";
import { GiBull } from "react-icons/gi";

const Header = () => {
  return (
    <Grid.Container
      as="header"
      alignItems="center"
      gap={3}
      css={{ bgColor: "$black", pb: "$0" }}
    >
      <Grid css={{ fd: "row", display: "flex" }}>
        <GiBull size={70} color="white" />
        <Spacer x={0.25} />
      </Grid>
      <Grid>
        <Text
          h1
          css={{
            fontFamily: "Fugaz One",
            fs: "$xl5",
            tt: "uppercase",
            color: "$accents0",
          }}
        >
          Busca
          <Text
            span
            css={{
              tt: "uppercase",
              color: "#52d452",
            }}
          >
            vet
          </Text>
        </Text>
        <Text h3 css={{ color: "$gray600" }}>
          Facilitando a vida do produtor
        </Text>
      </Grid>
    </Grid.Container>
  );
};

export default Header;
