import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Wojciech Lis Photography</title>
        <meta
          name="description"
          content="Wojciech Lis Photography. Macro photography, product photography, portrait  "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Home Page</main>
    </div>
  );
}
