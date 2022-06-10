import { GiBull } from "react-icons/gi";

import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <GiBull />
      <div>
        <h1>
          Busca<span>vet</span>
        </h1>
        <h2>Facilitando a vida do produtor</h2>
      </div>
    </header>
  );
};

export default Header;
