/* eslint-disable react/no-array-index-key */
import styles from './StarList.module.css';
import Star from '../Star/Star';

export default function StarList({ className, rating, length = 5 }) {
  return (
    <ul className={`${styles['star-list']} ${className}`}>
      {Array.from({ length }, (_, i) => (
        <li key={i}>
          <Star active={i <= rating - 1} />
        </li>
      ))}
    </ul>
  );
}
