import React from 'react';
import {
  FiTrendingUp,
  FiUsers,
  FiFeather,
  FiFileText,
  FiHeadphones,
  FiRefreshCw,
} from 'react-icons/fi';

import '../../App.module.css';
import styles from './Parceiros.module.css';

const Parceiros = () => {
  return (
    <>
      {/* CAPA PARCEIROS */}
      <header className={styles.capa}>
        <div>
          <p className={styles.sectionTitle}>Para parceiros</p>

          <h1 className={styles.tituloCapa}>Seja parceiro da ShinraiSys</h1>

          <p className={styles.heroLead}>
            Ofereça tecnologia com propósito aos seus clientes. Com o Shinrai
            Flow, clínicas, consultórios e barbearias podem licenciar uma
            solução pronta, confiável e com suporte completo.
          </p>
        </div>
      </header>

      <main>
        {/* BENEFÍCIOS EM CAIXAS */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Benefícios</p>

            <h2 className={styles.sectionHeading}>Benefícios comerciais</h2>

            <div className={styles.trustCard}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiTrendingUp />
                </div>
                <p className={styles.trustTitle}>
                  Comissionamento ou licenciamento
                </p>
                <p className={styles.trustText}>
                  Monte um modelo alinhado ao seu negócio: indicação com
                  comissões ou licenças recorrentes para sua base.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiUsers />
                </div>
                <p className={styles.trustTitle}>
                  Painel de gestão para múltiplos profissionais
                </p>
                <p className={styles.trustText}>
                  Acompanhe agendas, cadastros e resultados de todos os
                  profissionais conectados à sua clínica ou rede.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiFeather />
                </div>
                <p className={styles.trustTitle}>
                  Marca consolidada e identidade visual profissional
                </p>
                <p className={styles.trustText}>
                  Use a identidade da ShinraiSys ou personalize a solução com a
                  sua marca em formato white label.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* MODELOS DE PARCERIA */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Modelos de parceria</p>

            <h2 className={styles.sectionHeading}>
              Encontre o formato ideal para o seu negócio
            </h2>

            <p className={`${styles.sectionText} ${styles.mb5}`}>
              Trabalhamos com modelos flexíveis para atender consultórios,
              clínicas, redes de serviços e empresas que desejam oferecer o
              Shinrai Flow como benefício para seus profissionais.
            </p>

            <div className={styles.modelsGrid}>
              <div className={styles.modelCard}>
                <h3 className={styles.modelTitle}>
                  Indicação com comissionamento
                </h3>
                <p className={styles.modelText}>
                  Você indica o Shinrai Flow para sua base e recebe comissões
                  sobre as contas ativas.
                </p>
                <ul className={styles.listCheck}>
                  <li>Modelo simples e rápido</li>
                  <li>Relatórios de contas ativas</li>
                  <li>Ideal para influenciadores e associações</li>
                </ul>
              </div>

              <div className={styles.modelCard}>
                <h3 className={styles.modelTitle}>
                  Licenciamento para clínicas
                </h3>
                <p className={styles.modelText}>
                  A clínica oferece o sistema diretamente aos profissionais, com
                  condições exclusivas.
                </p>
                <ul className={styles.listCheck}>
                  <li>Gestão centralizada dos profissionais</li>
                  <li>Planos em lote</li>
                  <li>Suporte direto da ShinraiSys</li>
                </ul>
              </div>

              <div className={styles.modelCard}>
                <h3 className={styles.modelTitle}>White label</h3>
                <p className={styles.modelText}>
                  Solução com sua marca, para redes e empresas que desejam uma
                  plataforma própria.
                </p>
                <ul className={styles.listCheck}>
                  <li>Identidade visual personalizada</li>
                  <li>Domínio próprio</li>
                  <li>Suporte técnico e evolução contínua</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* MATERIAIS E SUPORTE (CAIXAS IGUAIS AO BENEFÍCIOS) */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Suporte</p>

            <h2 className={styles.sectionHeading}>Materiais e suporte</h2>

            <p className={`${styles.sectionText} ${styles.mb5}`}>
              Não é só tecnologia: oferecemos materiais, atendimento humano e
              evolução constante para apoiar sua operação no dia a dia.
            </p>

            <div className={styles.trustCard}>
              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiFileText />
                </div>
                <p className={styles.trustTitle}>Materiais de divulgação</p>
                <p className={styles.trustText}>
                  Conte com apresentações, textos, imagens e materiais prontos
                  para comunicar o Shinrai Flow à sua base.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiHeadphones />
                </div>
                <p className={styles.trustTitle}>Suporte humano</p>
                <p className={styles.trustText}>
                  Atendimento próximo para equipe interna e profissionais que
                  utilizam o sistema.
                </p>
              </div>

              <div className={styles.trustItem}>
                <div className={styles.trustIcon}>
                  <FiRefreshCw />
                </div>
                <p className={styles.trustTitle}>Evolução contínua</p>
                <p className={styles.trustText}>
                  Melhorias constantes baseadas em feedbacks reais de parceiros
                  e usuários.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FORMULÁRIO */}
        <section className={styles.section}>
          <div>
            <p className={styles.sectionTitle}>Formulário</p>

            <h2 className={styles.sectionHeading}>Quero ser parceiro</h2>

            <p className={`${styles.sectionText} ${styles.mb4}`}>
              Preencha os dados abaixo e nossa equipe entrará em contato para
              entender o melhor modelo para o seu negócio.
            </p>

            <div className={styles.formCard}>
              <form>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Nome completo</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Seu nome"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>E-mail</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="seuemail@exemplo.com"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    Empresa / clínica / rede
                  </label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Nome da empresa ou clínica"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Segmento</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Saúde, estética, educação, etc."
                  />
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>Mensagem</label>
                  <textarea
                    className={`${styles.formInput} ${styles.textarea}`}
                    rows="4"
                    placeholder="Conte um pouco sobre sua demanda"
                  />
                </div>

                <button type="submit" className="btnDark">
                  Enviar interesse
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Parceiros;
