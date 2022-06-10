import { Card, Container, Grid, Text } from "@nextui-org/react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface NavButtonProps {
  text: string;
  icon: ReactNode;
  link: string;
}

const NavButton: FC<NavButtonProps> = ({ text, icon, link }) => {
  return (
    <Grid xs>
      <Card
        isPressable
        isHoverable
        variant="bordered"
        css={{
          "&:hover": {
            borderColor: "rgb(66, 168, 66)",
            color: "rgb(66, 168, 66)",
          },
        }}
      >
        <Card.Body css={{ ai: "center", jc: "space-between", fd: "row" }}>
          <Link href={link}>
            <Container
              css={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                pl: "$0",
                color: "$black",
              }}
            >
              {icon}
              <Text
                h4
                css={{
                  ml: "$5",
                }}
              >
                {text}
              </Text>
            </Container>
            <FaArrowRight />
          </Link>
        </Card.Body>
      </Card>
    </Grid>
  );
};

export default NavButton;
