import styles from './Header.module.css';
import Logo from '../Logo/Logo';

export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <Logo className={styles['header-logo']} />
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
