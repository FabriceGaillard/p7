import styles from './Home.module.css';
import ThumbList from '../../components/ThumbList/ThumbList';

export default function Home() {
  return (
    <>
      <div className={styles['home-hero']}>
        <h1>Chez vous, partout et ailleurs</h1>
      </div>

      <section className={styles['home-cards']}>
        <ThumbList />
      </section>
    </>
  );
}
