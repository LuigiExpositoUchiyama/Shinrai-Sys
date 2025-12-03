import React from 'react';
import '../../App.module.css';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <>
      {/* CAPA - mesmo padrão do Flow/Blog */}
      <header className={styles.capa}>
        <div>
          <p className={styles.sectionTitle}>Sobre nós</p>
          <h1 className={styles.capaTitle}>
            Confiança é nossa base. Fluidez é nosso caminho.
          </h1>
          <p className={styles.capaLead}>
            A ShinraiSys nasceu com a missão de criar sistemas que respeitam o
            tempo, o trabalho e a jornada dos profissionais. Valorizamos
            tecnologia acessível, design com propósito e suporte humano.
          </p>
        </div>
      </header>

      <main>
        {/* HISTÓRIA */}
        <section className={styles.section}>
          <div className={styles.trustCard}>
            <h2 className={styles.trustHeading}>Nossa história</h2>

            <p className={styles.trustText}>
              Começamos pequenos, ouvindo de perto as dores de profissionais
              autônomos, clínicas e redes de serviço. Percebemos que muitos
              sistemas eram pesados, confusos e pouco empáticos com a rotina de
              quem atende pessoas todos os dias.
            </p>

            <p className={styles.trustText}>
              Unimos experiência em desenvolvimento, design e atendimento para
              criar soluções digitais que equilibram organização, simplicidade e
              relacionamento humano. Assim nasceu o Shinrai Flow e o ecossistema
              ShinraiSys.
            </p>
          </div>
        </section>

        {/* VALORES */}
        <section className={styles.section}>
          <p className={styles.sectionTitle}>Valores</p>
          <h2 className={styles.sectionHeading}>O que guia nossas decisões</h2>

          <div className={styles.trustCard}>
            <ul className={styles.listCheck}>
              <li>
                <strong>Confiança</strong> — relações transparentes com
                clientes, parceiros e equipe.
              </li>
              <li>
                <strong>Propósito</strong> — tecnologia a serviço de pessoas,
                não o contrário.
              </li>
              <li>
                <strong>Simplicidade</strong> — menos ruído, mais foco no que
                importa.
              </li>
              <li>
                <strong>Educação</strong> — conteúdo e suporte que ajudam a usar
                melhor cada recurso.
              </li>
              <li>
                <strong>Evolução contínua</strong> — melhoria constante baseada
                em feedback real.
              </li>
            </ul>
          </div>
        </section>

        {/* CULTURA */}
        <section className={styles.section}>
          <div className={styles.trustCard}>
            <h2 className={styles.trustHeading}>Cultura Shinrai</h2>

            <p className={styles.trustText}>
              “Shinrai” significa confiança em japonês. Carregamos esse conceito
              em cada detalhe: das decisões de produto à forma como atendemos
              quem escolhe trabalhar com a gente.
            </p>

            <p className={styles.trustText}>
              Criamos um ambiente leve, com comunicação clara e respeito ao
              tempo de todos. Acreditamos que sistemas bem pensados trazem mais
              fluidez à rotina, deixando espaço para o que realmente importa:
              cuidar de pessoas.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Sobre;
