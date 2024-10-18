import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css"; // Import CSS module

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <Link to="/login" className={styles.link}>
              Entrar
            </Link>
          </li>
          <li className={styles.li}>
            <Link to="/register" className={styles.link}>
              Cadastrar
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
