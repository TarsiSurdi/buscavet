import { Text } from "@nextui-org/react";
import { useContext, useEffect } from "react";
import { FooterContext } from "../contexts/FooterContext";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { phrase } = useContext(FooterContext);

  return (
    <footer className={styles.footer}>
      <Text h5 css={{ ta: "center" }}>
        {phrase}
      </Text>
    </footer>
  );
};

export default Footer;
