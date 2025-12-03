import React, { useEffect, useState } from 'react';
import { BsInstagram, BsLinkedin, BsYoutube } from 'react-icons/bs';

/* CSS */
import styles from './Footer.module.css';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocial}>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className={styles.footerIcon}
        >
          <BsInstagram />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className={styles.footerIcon}
        >
          <BsLinkedin />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className={styles.footerIcon}
        >
          <BsYoutube />
        </a>
      </div>

      <p className={styles.footerText}>
        © {year} <span className={styles.brand}>ShinraiSys</span> — Tecnologia
        com propósito.
      </p>
    </footer>
  );
};

export default Footer;
