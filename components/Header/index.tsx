import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import { GiBull } from "react-icons/gi";

const Header = () => {
  return (
    <div
      style={{
        width: "100%",
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "999",
      }}
    >
      <Grid.Container
        alignItems="center"
        gap={3}
        css={{
          bgColor: "$black",
          p: "$0",
          m: "$0",
          minWidth: "100vw",
          width: "100%",
        }}
      >
        <Grid
          css={{
            display: "flex",
            fd: "row",
            pb: "$0",
            pr: "$40",
          }}
          xs
        >
          <GiBull
            color="white"
            style={{ minWidth: "60px", minHeight: "60px" }}
          />
          <Spacer x={1} />
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
        </Grid>
        <Grid css={{ pt: "$0", display: "flex", fd: "row" }}>
          <Text
            h2
            css={{
              color: "$gray600",
              fontSize: "16pt",
            }}
          >
            Facilitando a vida do produtor
          </Text>
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Header;
