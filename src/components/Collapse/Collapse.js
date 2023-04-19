import styles from './Collapse.module.css';

export default function Collapse({
  className = '',
  summary,
  children,
  opened = false,
}) {
  return (
    <details className={`${styles.collapse} ${className}`} open={opened}>
      <summary>{summary}</summary>
      <div className={styles['collapse-content']}>{children}</div>
    </details>
  );
}
