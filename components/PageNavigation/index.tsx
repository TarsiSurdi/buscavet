import Link from "next/link";
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
      <div className={styles.title}>
        {icon}
        <h1>{title}</h1>
      </div>
    </nav>
  );
};

export default PageNavigation;
