import styles from './Tag.module.css';

export default function Tag({ content }) {
  return <span className={styles.tag}>{content}</span>;
}
