import React from 'react';
import '../../App.module.css';
import styles from './Blog.module.css';

const Blog = () => {
  return (
    <>
      {/* CAPA DO BLOG — seguindo o padrão do Flow */}
      <header className={styles.capa}>
        <div>
          <p className={styles.sectionTitle}>Blog Shinrai</p>
          <h1 className={styles.capaTitle}>
            Conteúdos para quem quer crescer com confiança
          </h1>
          <p className={styles.capaLead}>
            Artigos sobre gestão, tecnologia, bem-estar e os bastidores da
            ShinraiSys — tudo pensado para profissionais que valorizam fluidez e
            organização.
          </p>
        </div>
      </header>

      <main>
        {/* CATEGORIAS */}
        <section className={styles.section}>
          <p className={styles.sectionTitle}>Categorias</p>

          <div className={styles.categoryList}>
            <span className={styles.categoryBadge}>Gestão para autônomos</span>
            <span className={styles.categoryBadge}>Tendências em saúde</span>
            <span className={styles.categoryBadge}>
              Tecnologia com propósito
            </span>
            <span className={styles.categoryBadge}>Bastidores da Shinrai</span>
          </div>

          {/* POSTS */}
          <div className={styles.postsGrid}>
            <article className={styles.postCard}>
              <p className={styles.postMeta}>Gestão para autônomos</p>
              <h2 className={styles.postTitle}>
                Como organizar sua agenda sem perder qualidade no atendimento
              </h2>
              <p className={styles.postExcerpt}>
                Pequenas mudanças criam grandes transformações na rotina do
                atendimento.
              </p>
              <button className={styles.postLink}>Ler artigo</button>
            </article>

            <article className={styles.postCard}>
              <p className={styles.postMeta}>Tecnologia com propósito</p>
              <h2 className={styles.postTitle}>
                O que significa ter um sistema pensado para pessoas?
              </h2>
              <p className={styles.postExcerpt}>
                Funcionalidades são importantes — mas respeito e fluidez
                importam mais.
              </p>
              <button className={styles.postLink}>Ler artigo</button>
            </article>

            <article className={styles.postCard}>
              <p className={styles.postMeta}>Bastidores da Shinrai</p>
              <h2 className={styles.postTitle}>
                Por que escolhemos o nome Shinrai?
              </h2>
              <p className={styles.postExcerpt}>
                A palavra japonesa que inspira nossa cultura e nossas decisões.
              </p>
              <button className={styles.postLink}>Ler artigo</button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
};

export default Blog;
