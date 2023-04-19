/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import styles from './Carousel.module.css';

export default function Carousel({ className = '', pictures, title }) {
  const [index, setIndex] = useState(0);

  function handleIndex(direction) {
    const newIndex =
      index + direction < 0
        ? pictures.length - 1
        : (index + direction) % pictures.length;

    setIndex(newIndex);
  }

  return (
    <div className={`${styles.carousel} ${className}`}>
      <ul style={{ transform: `translateX(${index * -100}%)` }}>
        {pictures.map((p) => (
          <li key={p}>
            <img src={p} alt={`${title}, 1/${index}`} />
          </li>
        ))}
      </ul>

      {pictures.length > 1 && (
        <div className={styles.controls}>
          <button
            className={styles['btn-left']}
            onClick={() => handleIndex(-1)}
            type="button"
          />
          <button
            className={styles['btn-right']}
            onClick={() => handleIndex(1)}
            type="button"
          />
        </div>
      )}

      <span className={styles['carousel-index']}>
        {index + 1}/{pictures.length}
      </span>
    </div>
  );
}
