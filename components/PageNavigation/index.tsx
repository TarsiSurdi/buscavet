import Link from "next/link";
import { Spacer, Text } from "@nextui-org/react";
import { ReactNode } from "react";
import { FaArrowLeft } from "react-icons/fa";

import styles from "./PageNavigation.module.scss";

interface PageNavigationProps {
  icon: ReactNode;
  title: string;
}

const PageNavigation = ({ icon, title }: PageNavigationProps) => {
  return (
    <nav>
      <Link href="/">
        <div className={styles.link}>
          <FaArrowLeft />
          <p>Voltar ao início</p>
        </div>
      </Link>
      <div style={{ marginBottom: "1em" }}>
        <Text
          h2
          css={{
            dflex: "flex-start",
            ai: "center",
            fontWeight: "$bold",
            "@xsMax": {
              fs: "$xl2",
            },
          }}
        >
          {icon}
          <Spacer x={0.5} />
          {title}
        </Text>
      </div>
    </nav>
  );
};

export default PageNavigation;
