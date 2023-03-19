import styles from './ThumbItem.module.css';

/**
 *
 * @param {object} props
 * @property {string} title
 * @property {string} id
 * @property {string} cover
 * @returns
 */
export default function ThumbItem({ title, id, cover }) {
  return (
    <li>
      <article className={styles.thumb}>
        <a href={`/${id}`}>
          <img src={cover} alt={title} />
          <h2>{title}</h2>
        </a>
      </article>
    </li>
  );
}
