import React from 'react';
import '../../App.module.css';
import styles from './Flow.module.css';

import {
  FiCalendar,
  FiMessageCircle,
  FiFolder,
  FiBarChart2,
  FiStar,
  FiMail,
  FiInstagram,
  FiLinkedin,
  FiMapPin,
  FiUser,
  FiActivity,
  FiHeart,
  FiTrendingUp,
  FiScissors,
  FiBookOpen,
  FiTool,
} from 'react-icons/fi';

import { TbDental } from 'react-icons/tb';

const Flow = () => {
  return (
    <>
      <header className={styles.capa}>
        <div>
          <p className={styles.sectionTitle}>Shinrai Flow</p>
          <h1 className={styles.capaTitle}>
            Organização e confiança para profissionais autônomos
          </h1>
          <p className={styles.capaLead}>
            Um sistema leve, intuitivo e elegante criado para quem vive de
            atendimento e precisa de rotina fluida, organizada e humana.
          </p>
        </div>
      </header>

      <main>
        <section className={styles.section}>
          <p className={styles.sectionTitle}>Funcionalidades</p>
          <h2 className={styles.sectionHeading}>
            Tudo o que você precisa, sem complicação
          </h2>
          <p className={`${styles.sectionText} ${styles.mb5}`}>
            Com o Shinrai Flow, você organiza sua agenda, se comunica com seus
            clientes e acompanha seus recebimentos — tudo em um só lugar.
          </p>

          <div className={styles.funcCard}>
            <div className={styles.funcItem}>
              <div className={styles.funcIcon}>
                <FiCalendar />
              </div>
              <div>
                <p className={styles.funcTitle}>
                  Agenda inteligente com recorrência e bloqueios
                </p>
                <p className={styles.funcText}>
                  Configure seus horários, crie sessões recorrentes e bloqueie
                  períodos com facilidade.
                </p>
              </div>
            </div>

            <div className={styles.funcItem}>
              <div className={styles.funcIcon}>
                <FiMessageCircle />
              </div>
              <div>
                <p className={styles.funcTitle}>
                  WhatsApp integrado para lembretes e confirmações
                </p>
                <p className={styles.funcText}>
                  Envie lembretes automáticos e confirme atendimentos direto no
                  WhatsApp.
                </p>
              </div>
            </div>

            <div className={styles.funcItem}>
              <div className={styles.funcIcon}>
                <FiFolder />
              </div>
              <div>
                <p className={styles.funcTitle}>
                  Ficha do cliente com histórico e anotações
                </p>
                <p className={styles.funcText}>
                  Tenha o histórico completo do cliente em um só lugar.
                </p>
              </div>
            </div>

            <div className={styles.funcItem}>
              <div className={styles.funcIcon}>
                <FiBarChart2 />
              </div>
              <div>
                <p className={styles.funcTitle}>Controle financeiro simples</p>
                <p className={styles.funcText}>
                  Acompanhe pagamentos, recebimentos e relatórios rápidos.
                </p>
              </div>
            </div>

            <div className={styles.funcItem}>
              <div className={styles.funcIcon}>
                <FiStar />
              </div>
              <div>
                <p className={styles.funcTitle}>
                  Marketing leve para fidelização
                </p>
                <p className={styles.funcText}>
                  Envie lembretes de retorno e comunicações pontuais sem ser
                  invasivo.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionTitle}>Para quem é</p>
          <h2 className={styles.sectionHeading}>
            Feito para quem vive de atendimento
          </h2>

          <p className={`${styles.sectionText} ${styles.mb4}`}>
            O Shinrai Flow atende nichos que precisam de rotina organizada,
            eficiência e proximidade com seus clientes:
          </p>

          <div className={styles.forCard}>
            <ul className={styles.forList}>
              <li>
                <FiUser className={styles.forIcon} />
                <span>Psicólogos</span>
              </li>
              <li>
                <TbDental className={styles.forIcon} />
                <span>Dentistas</span>
              </li>
              <li>
                <FiActivity className={styles.forIcon} />
                <span>Fisioterapeutas</span>
              </li>
              <li>
                <FiHeart className={styles.forIcon} />
                <span>Nutricionistas</span>
              </li>
              <li>
                <FiTrendingUp className={styles.forIcon} />
                <span>Esteticistas</span>
              </li>
              <li>
                <FiScissors className={styles.forIcon} />
                <span>Barbeiros e cabeleireiros</span>
              </li>
              <li>
                <FiBookOpen className={styles.forIcon} />
                <span>Professores particulares</span>
              </li>
              <li>
                <FiTool className={styles.forIcon} />
                <span>Consultores e técnicos</span>
              </li>
            </ul>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionTitle}>Planos</p>
          <h2 className={styles.sectionHeading}>
            Comece grátis. Evolua no seu ritmo.
          </h2>

          <p className={`${styles.sectionText} ${styles.mb5}`}>
            Teste o sistema sem custo e mude de plano quando fizer sentido.
          </p>

          <div className={styles.planGrid}>
            <div className={styles.planCardSmall}>
              <div className={styles.planContent}>
                <h3 className={styles.planTitle}>Plano inicial</h3>
                <p className={styles.planSubtitle}>Ideal para começar.</p>

                <ul className={styles.listCheck}>
                  <li>Agenda digital</li>
                  <li>Cadastro de clientes</li>
                  <li>Lembretes básicos</li>
                </ul>

                <p className={styles.planDesc}>
                  Comece grátis e teste no seu dia a dia.
                </p>
              </div>

              <div className={styles.planButtonWrapper}>
                <button className="btnOutlineDark">Comece grátis</button>
              </div>
            </div>

            <div className={styles.planCard}>
              <div className={styles.planContent}>
                <h3 className={styles.planTitle}>Plano profissional</h3>
                <p className={styles.planSubtitle}>Para quem quer mais.</p>

                <ul className={styles.listCheck}>
                  <li>Tudo do plano inicial</li>
                  <li>WhatsApp automatizado</li>
                  <li>Relatórios completos</li>
                  <li>Ferramentas de fidelização</li>
                </ul>

                <p className={styles.planDesc}>
                  Pensado para acompanhar o crescimento do seu negócio.
                </p>
              </div>

              <div className={styles.planButtonWrapper}>
                <button className="btnDark">Iniciar plano profissional</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <p className={styles.sectionTitle}>Contato</p>
          <h2 className={styles.sectionHeading}>Fale com a equipe Shinrai</h2>

          <p className={`${styles.sectionText} ${styles.mb4}`}>
            Quer começar agora ou tirar dúvidas? Envie uma mensagem pelos canais
            abaixo:
          </p>

          <div className={styles.contactCard}>
            <div className={styles.contactLine}>
              <span className={styles.contactIcon}>
                <FiMail />
              </span>
              <span>contato@shinraisys.com.br</span>
            </div>

            <div className={styles.contactLine}>
              <span className={styles.contactIcon}>
                <FiInstagram />
              </span>
              <span>@shinraisys</span>
            </div>

            <div className={styles.contactLine}>
              <span className={styles.contactIcon}>
                <FiLinkedin />
              </span>
              <span>ShinraiSys</span>
            </div>

            <div className={styles.contactLine}>
              <span className={styles.contactIcon}>
                <FiMapPin />
              </span>
              <span>São Paulo, Brasil</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Flow;
