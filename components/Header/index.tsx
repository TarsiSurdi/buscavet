import { Container, Grid, Spacer, Text } from "@nextui-org/react";
import { GiBull } from "react-icons/gi";

const Header = () => {
  return (
    <>
      <Container
        css={{
          maxWidth: "100vw",
          p: "$0",
          // "@xsMax": {
          //   display: "none",
          // },
        }}
        as="header"
      >
        <Grid.Container
          alignItems="center"
          gap={3}
          css={{
            bgColor: "$black",
            pb: "$0",
          }}
        >
          <Grid
            css={{
              display: "flex",
              fd: "row",
              pb: "$0",
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
                  mr: "$18",
                }}
              >
                vet
              </Text>
            </Text>
          </Grid>
          <Grid css={{ pt: "$0", display: "flex", fd: "row" }}>
            <Text h2 css={{ color: "$gray600", fontSize: "16pt" }}>
              Facilitando a vida do produtor
            </Text>
          </Grid>
        </Grid.Container>
      </Container>

      {/* <Container
        // Smaller version of the header
        css={{
          maxWidth: "100vw",
          p: "$0",
          display: "none",
          "@xsMax": {
            display: "block",
          },
        }}
        as="header"
      >
        <Grid.Container
          alignItems="center"
          gap={3}
          css={{
            bgColor: "$black",
            pb: "$0",
          }}
        >
          <Grid
            xs
            css={{
              display: "flex",
              fd: "row",
            }}
          >
            <GiBull size={70} color="white" />
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
          <Grid css={{ pt: "$0" }}>
            <Text h2 css={{ color: "$gray600", fontSize: "$xl2" }}>
              Facilitando a vida do produtor
            </Text>
          </Grid>
        </Grid.Container>
      </Container> */}
    </>
  );
};

export default Header;
