import { Container, Text } from "@nextui-org/react";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Text h5 css={{ ta: "center" }}>
        🍪 Esse site não utiliza cookies
      </Text>
    </footer>
  );
};

export default Footer;
