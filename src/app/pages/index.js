// pages/index.js
import Head from 'next/head';
import Card from '../components/Card.jsx';  // Importing the Card component
import styles from '../styles/styles.module.css';  // Importing the styles module

export default function Home() {
  return (
    <div>
      <Head>
        <title>Modern Card Example</title>
        <meta name="description" content="A beautiful modern card component" />
      </Head>

      <main className={styles.main}>
        <h1>Explore Our Random Cards</h1>

        {/* Add the Card component here */}
        <div className={styles.cardContainer}>
          <Card />  {/* Render the Card component */}
        </div>
      </main>
    </div>
  );
}
