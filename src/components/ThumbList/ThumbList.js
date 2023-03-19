import ThumbItem from '../ThumbItem/ThumbItem';
import styles from './ThumbList.module.css';
import data from '../../data/data.json';

export default function ThumbList() {
  return (
    <ul className={styles['thumb-list']}>
      {data.map((d) => (
        <ThumbItem key={d.id} title={d.title} cover={d.cover} id={d.id} />
      ))}
    </ul>
  );
}
