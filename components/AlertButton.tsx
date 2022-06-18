import { Card, Grid, Spacer, Text } from "@nextui-org/react";
import Link from "next/link";
import { FC, ReactNode } from "react";
import { FaArrowRight } from "react-icons/fa";

interface AlertButton {
  text: string;
  icon: ReactNode;
  link: string;
}

const AlertButton: FC<AlertButton> = ({ text, icon, link }) => {
  return (
    <Grid xs>
      <Link href={link}>
        <Card
          isPressable
          isHoverable
          variant="bordered"
          css={
            {
              // "&:hover": {
              //   borderColor: "rgb(66, 168, 66)",
              //   color: "rgb(66, 168, 66)",
              // },
            }
          }
        >
          <Card.Body
            css={{
              background:
                "linear-gradient(253deg, rgba(171,14,0,1) 0%, rgba(223,23,23,1) 30%, rgba(223,23,23,1) 70%, rgba(251,66,46,1) 100%)",
            }}
          >
            <Grid.Container alignItems="center">
              <Grid
                xs
                alignItems="center"
                css={{
                  jc: "center",
                  ai: "center",
                }}
              >
                {icon}
                <Spacer x={0.5} />
                <Text h3 css={{ color: "white" }}>
                  {text}
                </Text>
              </Grid>
            </Grid.Container>
          </Card.Body>
        </Card>
      </Link>
    </Grid>
  );
};

export default AlertButton;
