import styles from './Collapse.module.css';

export default function Collapse({ summary, children, opened = false }) {
  return (
    <details className={styles.collapse} open={opened}>
      <summary>{summary}</summary>
      <div className={styles['collapse-content']}>{children}</div>
    </details>
  );
}
