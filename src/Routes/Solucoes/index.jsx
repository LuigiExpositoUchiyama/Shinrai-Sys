import React from 'react';
import { Link } from 'react-router-dom';
import {
  FiCalendar,
  FiMessageCircle,
  FiFolder,
  FiBarChart2,
  FiGrid,
  FiLayers,
  FiUsers,
  FiActivity,
  FiBookOpen,
  FiCreditCard,
} from 'react-icons/fi';

import '../../App.module.css';
import styles from './Solucoes.module.css';

const Solucoes = () => {
  return (
    <>
      {/* CAPA SOLUÇÕES */}
      <header className={styles.capa}>
        <div>
          <h1 className={styles.tituloCapa}>
            Soluções pensadas para fluidez, organização e propósito
          </h1>

          <p className={styles.heroLead}>
            O Shinrai Flow é um sistema leve, intuitivo e elegante criado para
            profissionais autônomos e clínicas que buscam uma rotina organizada
            e um atendimento mais humano.
          </p>
        </div>
      </header>

      <main>
        {/* SHINRAI FLOW – AUTÔNOMOS */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Shinrai Flow</p>
            <h2 className={styles.sectionHeading}>
              Sistema leve e intuitivo para autônomos
            </h2>

            <p className={`${styles.sectionText} ${styles.mb5}`}>
              Ideal para psicólogos, dentistas, barbeiros, nutricionistas,
              esteticistas e outros profissionais que precisam de uma agenda
              inteligente, comunicação automatizada e controle financeiro
              simples.
            </p>

            <div className={styles.trustGrid}>
              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiCalendar />
                </div>
                <h3 className={styles.trustTitle}>
                  Agenda com recorrência e bloqueios
                </h3>
                <p className={styles.trustText}>
                  Personalize horários, períodos de descanso e recorrências de
                  atendimento.
                </p>
              </div>

              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiMessageCircle />
                </div>
                <h3 className={styles.trustTitle}>WhatsApp integrado</h3>
                <p className={styles.trustText}>
                  Lembretes e confirmações enviados automaticamente para seus
                  clientes.
                </p>
              </div>

              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiFolder />
                </div>
                <h3 className={styles.trustTitle}>Ficha do cliente completa</h3>
                <p className={styles.trustText}>
                  Histórico, anotações, arquivos e informações essenciais
                  organizadas em um só lugar.
                </p>
              </div>

              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiBarChart2 />
                </div>
                <h3 className={styles.trustTitle}>Financeiro simplificado</h3>
                <p className={styles.trustText}>
                  Acompanhe recebimentos, formas de pagamento e relatórios
                  rápidos.
                </p>
              </div>
            </div>

            <div className={styles.trustButtonWrapper}>
              <Link to="/shinrai-flow" className="btnDark">
                Comece grátis
              </Link>
            </div>
          </div>
        </section>

        {/* SHINRAI FLOW – CLÍNICAS E REDES */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Para clínicas e redes</p>
            <h2 className={styles.sectionHeading}>
              Painel parceiro e licenciamento
            </h2>

            <p className={`${styles.sectionText} ${styles.mb5}`}>
              Clínicas, consultórios e redes podem licenciar o Shinrai Flow e
              gerenciar diversos profissionais em um único ambiente, mantendo
              organização, padronização e dados seguros.
            </p>

            <div className={styles.trustGrid}>
              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiGrid />
                </div>
                <h3 className={styles.trustTitle}>Gestão centralizada</h3>
                <p className={styles.trustText}>
                  Acompanhe profissionais, agendas e clientes em um único
                  painel.
                </p>
              </div>

              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiLayers />
                </div>
                <h3 className={styles.trustTitle}>
                  Licenciamento e white label
                </h3>
                <p className={styles.trustText}>
                  Use a tecnologia Shinrai com sua própria marca e identidade
                  visual.
                </p>
              </div>

              <div className={styles.trustBox}>
                <div className={styles.trustIcon}>
                  <FiUsers />
                </div>
                <h3 className={styles.trustTitle}>
                  Indicações e comissionamento
                </h3>
                <p className={styles.trustText}>
                  Modelo comercial pensado para crescimento sustentável.
                </p>
              </div>
            </div>

            <div className={styles.trustButtonWrapper}>
              <Link to="/parceiros" className="btnOutlineDark">
                Saiba mais
              </Link>
            </div>
          </div>
        </section>

        {/* OUTROS SISTEMAS / ROADMAP */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Outros sistemas</p>
            <h2 className={styles.sectionHeading}>
              Estamos construindo novas ferramentas
            </h2>

            <p className={`${styles.sectionText} ${styles.mb5}`}>
              Um ecossistema de soluções para saúde, educação e serviços, sempre
              com foco em simplicidade e confiança.
            </p>

            <div className={styles.futureGrid}>
              <div className={styles.futureCard}>
                <div className={styles.futureIcon}>
                  <FiActivity />
                </div>
                <h3 className={styles.futureTitle}>Shinrai Clinic</h3>
                <p className={styles.futureText}>
                  Pensado para clínicas e redes com times maiores e múltiplas
                  unidades.
                </p>
              </div>

              <div className={styles.futureCard}>
                <div className={styles.futureIcon}>
                  <FiBookOpen />
                </div>
                <h3 className={styles.futureTitle}>Shinrai Edu</h3>
                <p className={styles.futureText}>
                  Para cursos, mentorias, escolas e formações com foco em
                  experiência do aluno.
                </p>
              </div>

              <div className={styles.futureCard}>
                <div className={styles.futureIcon}>
                  <FiCreditCard />
                </div>
                <h3 className={styles.futureTitle}>Shinrai Pay</h3>
                <p className={styles.futureText}>
                  Integrações com pagamentos, cobranças recorrentes e automações
                  financeiras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className={styles.section}>
          <div className={styles.ctaWrapper}>
            <h2 className={styles.sectionHeading}>
              Quer experimentar o Shinrai Flow?
            </h2>
            <p className={styles.sectionText}>
              Crie sua conta em poucos segundos e comece a organizar sua rotina
              hoje mesmo.
            </p>

            <Link to="/shinrai-flow" className="btnDark">
              Comece grátis
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Solucoes;
