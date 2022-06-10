import { Grid } from "@nextui-org/react";
import { FC, PropsWithChildren } from "react";

const NavGridContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Grid.Container gap={2} justify="center">
      {children}
    </Grid.Container>
  );
};

export default NavGridContainer;
