import React from 'react';
import { Link } from 'react-router-dom';
import { FiShield, FiCloud, FiUsers, FiMessageCircle } from 'react-icons/fi';

/* CSS */
import '../../App.module.css';
import styles from './Home.module.css';

const Home = () => {
  return (
    <>
      {/* HERO */}
      <header className={styles.capa}>
        <div>
          <h1 className={styles.tituloCapa}>
            Tecnologia com propósito para profissionais e parceiros
          </h1>

          <p className={styles.heroLead}>
            Na ShinraiSys, desenvolvemos soluções digitais que unem organização,
            comunicação e confiança. Sistemas pensados para profissionais
            autônomos, clínicas e redes que buscam fluidez e crescimento
            sustentável.
          </p>

          <div className={styles.heroButtons}>
            <Link to="/shinrai-flow" className="btnDark">
              Conheça o Shinrai Flow
            </Link>
            <Link to="/parceiros" className="btnOutlineDark">
              Seja parceiro
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* PRODUTOS */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Produtos</p>
            <h2 className={styles.sectionHeading}>
              Destaques das nossas soluções
            </h2>
            <p className={`${styles.sectionText} ${styles.mb5}`}>
              Começamos pelo Shinrai Flow, um sistema leve e intuitivo para
              organizar seu dia a dia.
            </p>

            <div className={styles.productWrapper}>
              <div className={styles.productHighlightCard}>
                <h3>Shinrai Flow</h3>
                <p className={styles.mb3}>
                  Agenda inteligente, comunicação automatizada e controle
                  financeiro simples.
                </p>

                <ul className={`${styles.listCheck} ${styles.mb4}`}>
                  <li>Agenda com recorrência e bloqueios</li>
                  <li>WhatsApp integrado para lembretes</li>
                  <li>Histórico completo do cliente</li>
                  <li>Relatórios e recebimentos simples</li>
                  <li>Funções de fidelização</li>
                </ul>

                <Link to="/shinrai-flow" className="btnOutlineDark">
                  Ver detalhes
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONFIANÇA */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Confiança</p>
            <h2 className={`${styles.sectionHeading} ${styles.mb5}`}>
              Profissionais e parceiros no centro de tudo
            </h2>

            <div className={styles.trustCard}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiShield />
                </div>
                <p className={styles.trustTitle}>Cuidado com dados</p>
                <p className={styles.trustText}>
                  Tratamos informações com segurança e privacidade adequadas.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiCloud />
                </div>
                <p className={styles.trustTitle}>Disponibilidade</p>
                <p className={styles.trustText}>
                  Sistema estável, rápido e sempre evoluindo.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiUsers />
                </div>
                <p className={styles.trustTitle}>Suporte humano</p>
                <p className={styles.trustText}>
                  Pessoas reais ajudando você no dia a dia.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiMessageCircle />
                </div>
                <p className={styles.trustTitle}>Transparência</p>
                <p className={styles.trustText}>
                  Comunicação clara sobre melhorias e atualizações.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PARA PARCEIROS */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Para parceiros</p>
            <h2 className={styles.sectionHeading}>
              Conecte sua rede com tecnologia que faz sentido
            </h2>
            <p className={`${styles.sectionText} ${styles.mb4}`}>
              Ofereça o Shinrai Flow para sua clínica, rede ou base de autônomos
              e amplie seus serviços com licenciamento, comissionamento e white
              label.
            </p>

            <div className={styles.partnerCtaWrapper}>
              <Link
                to="/parceiros"
                className={`btnDark ${styles.partnerCtaBtn}`}
              >
                Quero ser parceiro
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
