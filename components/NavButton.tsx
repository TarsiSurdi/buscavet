import { Card, Container, Grid, Spacer, Text } from "@nextui-org/react";
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
      <Link href={link}>
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
          <Card.Body>
            <Grid.Container alignItems="center">
              <Grid
                xs
                alignItems="center"
                css={{
                  color: "$black",
                  "@xsMax": {
                    jc: "center",
                  },
                }}
              >
                {icon}
                <Spacer x={0.5} />
                <Text h4>{text}</Text>
              </Grid>
              <Grid
                css={{
                  "@xsMax": {
                    display: "none",
                  },
                }}
              >
                <FaArrowRight />
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Link>
    </Grid>
  );
};

export default NavButton;
