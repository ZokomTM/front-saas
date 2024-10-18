import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import styles from "../styles/Footer.module.css"; // Import CSS module

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <p>Sistema em desenvolvimento</p>
      </div>
      <div className={styles.footerRight}>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
