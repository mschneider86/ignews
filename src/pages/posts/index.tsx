import Head from 'next/head';
import React from 'react';

import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href='#'>
            <time>10 de Junho de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aut totam nemo, repudiandae odit exercitationem odio
            </p>
          </a>
          <a href='#'>
            <time>10 de Junho de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aut totam nemo, repudiandae odit exercitationem odio
            </p>
          </a>
          <a href='#'>
            <time>10 de Junho de 2021</time>
            <strong>Lorem ipsum dolor sit amet.</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Asperiores aut totam nemo, repudiandae odit exercitationem odio
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
