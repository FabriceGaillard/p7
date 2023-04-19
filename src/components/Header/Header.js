import styles from './Header.module.css';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <a href="/">
        <Logo className={styles['header-logo']} />
      </a>
      <nav className={styles['header-nav']}>
        <ul>
          <li>
            <a href="/">Accueil</a>
          </li>
          <li>
            <a href="/">A Propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
