import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

/* CSS */
import '../../App.module.css';
import styles from './Header.module.css';
import menu from './MenuMobile.module.css';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={styles.headerWrapper}>
      <header className={`container ${styles.bgHeader}`}>
        {/* LOGO TEXTO */}
        <NavLink to="/" aria-label="Logo ShinraiSys">
          <span className={styles.logoText}>ShinraiSys</span>
        </NavLink>

        {/* HAMBURGUER */}
        <div className={menu.hamburger} onClick={toggleMenu}>
          <div className={menu.menuMobile}>
            <div className={menu.textMenu}>
              <p>Menu</p>
            </div>
            <div className={menu.menuHamburguer}>
              <div
                className={`${menu.menuHamburguerFechado} ${
                  showMenu ? menu.menuHamburguerAberto : ''
                }`}
              ></div>
            </div>
          </div>
        </div>

        {/* NAV */}
        <nav
          className={`${menu.menuFechado} ${showMenu ? menu.menuAberto : ''}`}
        >
          <ul className={styles.header} id="menu" role="menu">
            <li className={styles.menuItem}>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) => `${isActive ? styles.active : ''}`}
                end
              >
                Início
              </NavLink>
            </li>

            <li className={styles.menuItem}>
              <NavLink
                to="/solucoes"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Soluções
              </NavLink>
            </li>

            <li className={styles.menuItem}>
              <NavLink
                to="/parceiros"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Parcerias
              </NavLink>
            </li>

            <li className={styles.menuItem}>
              <NavLink
                to="/blog"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Blog
              </NavLink>
            </li>

            <li className={styles.menuItem}>
              <NavLink
                to="/sobre-nos"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Sobre nós
              </NavLink>
            </li>

            <li className={styles.menuItem}>
              <NavLink
                to="/contato"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `${styles.menuLink} ${isActive ? styles.active : ''}`
                }
              >
                Contato
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
