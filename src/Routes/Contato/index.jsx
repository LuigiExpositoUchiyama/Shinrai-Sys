import React from 'react';
import '../../App.module.css';
import styles from './Contato.module.css';

import { FiMail, FiInstagram, FiLinkedin, FiMapPin } from 'react-icons/fi';
import { FaYoutube } from 'react-icons/fa';

const Contato = () => {
  return (
    <>
      {/* CAPA (como já estava) */}
      <header className={styles.capa}>
        <div>
          <p className={styles.sectionTitle}>Contato</p>
          <h1 className={styles.capaTitle}>Fale com a gente</h1>
          <p className={styles.capaLead}>
            Estamos prontos para ouvir você. Dúvidas, sugestões ou parcerias —
            fale com a gente pelos canais abaixo ou envie uma mensagem.
          </p>
        </div>
      </header>

      <main>
        {/* GRID COM DOIS CARDS (FORM + CONTATOS) */}
        <section className={styles.section}>
          <div className={styles.contactGrid}>
            {/* CARD FORMULÁRIO */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Envie uma mensagem</h2>
              <p className={styles.cardText}>
                Preencha os campos abaixo e retornaremos o mais rápido possível.
              </p>

              <form className={styles.form}>
                <div className={styles.formGroup}>
                  <label>Nome</label>
                  <input type="text" placeholder="Seu nome completo" />
                </div>

                <div className={styles.formGroup}>
                  <label>E-mail</label>
                  <input type="email" placeholder="seuemail@exemplo.com" />
                </div>

                <div className={styles.formGroup}>
                  <label>Assunto</label>
                  <input
                    type="text"
                    placeholder="Sobre o que você quer falar?"
                  />
                </div>

                <div className={styles.formGroup}>
                  <label>Mensagem</label>
                  <textarea
                    rows="4"
                    placeholder="Escreva sua mensagem aqui"
                  ></textarea>
                </div>

                <button type="submit" className="btnDark">
                  Enviar mensagem
                </button>
              </form>
            </div>

            {/* CARD CONTATOS DIRETOS */}
            <div className={styles.card}>
              <h2 className={styles.cardTitle}>Canais diretos</h2>
              <p className={styles.cardText}>
                Se preferir, fale com a gente pelos nossos canais oficiais.
              </p>

              <ul className={styles.contactList}>
                <li>
                  <span className={styles.contactIcon}>
                    <FiMail />
                  </span>
                  <span>contato@shinraisys.com.br</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <FiInstagram />
                  </span>
                  <span>@shinraisys</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <FiLinkedin />
                  </span>
                  <span>ShinraiSys</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <FaYoutube />
                  </span>
                  <span>YouTube</span>
                </li>
                <li>
                  <span className={styles.contactIcon}>
                    <FiMapPin />
                  </span>
                  <span>São Paulo, Brasil</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contato;
